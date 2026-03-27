/**
 * Fix blog posts: re-seed content as Strapi Blocks JSON from original HTML.
 * Usage: node scripts/fix-blog-blocks.mjs
 */

import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const envPath = resolve(__dirname, '..', '.env.local')
const envContent = readFileSync(envPath, 'utf-8')
const env = Object.fromEntries(
  envContent.split('\n').filter(l => l && !l.startsWith('#')).map(l => {
    const idx = l.indexOf('=')
    return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()]
  })
)

const STRAPI_URL = env.STRAPI_URL || 'http://127.0.0.1:1337'
const STRAPI_TOKEN = env.STRAPI_TOKEN || ''

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${STRAPI_TOKEN}`,
}

// ---- HTML to Blocks converter (improved) ----

function htmlToBlocks(html) {
  if (!html || typeof html !== 'string') return []

  const blocks = []
  let pos = 0

  while (pos < html.length) {
    // Skip whitespace
    const ws = html.slice(pos).match(/^\s+/)
    if (ws) pos += ws[0].length
    if (pos >= html.length) break

    // Try to match a top-level tag
    const remaining = html.slice(pos)

    // <p>...</p>
    const pMatch = remaining.match(/^<p(\s[^>]*)?>(.+?)<\/p>/is)
    if (pMatch) {
      const children = parseInline(pMatch[2])
      if (children.some(c => c.text?.trim())) {
        blocks.push({ type: 'paragraph', children })
      }
      pos += pMatch[0].length
      continue
    }

    // <h1-6>...</h1-6>
    const hMatch = remaining.match(/^<(h([1-6]))(\s[^>]*)?>(.+?)<\/\1>/is)
    if (hMatch) {
      const level = parseInt(hMatch[2])
      const children = parseInline(hMatch[4])
      blocks.push({ type: 'heading', level, children })
      pos += hMatch[0].length
      continue
    }

    // <figure>...</figure> — skip images (Strapi blocks require uploaded media IDs)
    const figMatch = remaining.match(/^<figure(\s[^>]*)?>(.+?)<\/figure>/is)
    if (figMatch) {
      // Add a paragraph noting the image source for manual addition
      const captionMatch = figMatch[2].match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/i)
      const altMatch = figMatch[2].match(/alt="([^"]*)"/)
      const srcMatch = figMatch[2].match(/src="([^"]*)"/)
      if (srcMatch) {
        blocks.push({
          type: 'paragraph',
          children: [{
            type: 'text',
            text: `[Изображение: ${altMatch?.[1] || ''} — ${srcMatch[1]}]`,
            italic: true,
          }],
        })
      }
      pos += figMatch[0].length
      continue
    }

    // <blockquote>...</blockquote>
    const bqMatch = remaining.match(/^<blockquote(\s[^>]*)?>(.+?)<\/blockquote>/is)
    if (bqMatch) {
      const children = parseInline(bqMatch[2])
      blocks.push({ type: 'quote', children })
      pos += bqMatch[0].length
      continue
    }

    // <ul>...</ul> or <ol>...</ol>
    const listMatch = remaining.match(/^<(ul|ol)(\s[^>]*)?>(.+?)<\/\1>/is)
    if (listMatch) {
      const format = listMatch[1] === 'ol' ? 'ordered' : 'unordered'
      const items = []
      const liRegex = /<li(\s[^>]*)?>(.+?)<\/li>/gis
      let liM
      while ((liM = liRegex.exec(listMatch[3])) !== null) {
        items.push({ type: 'list-item', children: parseInline(liM[2]) })
      }
      blocks.push({ type: 'list', format, children: items })
      pos += listMatch[0].length
      continue
    }

    // <pre>...</pre>
    const preMatch = remaining.match(/^<pre(\s[^>]*)?>(.+?)<\/pre>/is)
    if (preMatch) {
      const code = preMatch[2].replace(/<code[^>]*>([\s\S]*?)<\/code>/i, '$1')
      blocks.push({ type: 'code', children: [{ type: 'text', text: decode(code) }] })
      pos += preMatch[0].length
      continue
    }

    // Skip unknown tags
    const skipTag = remaining.match(/^<[^>]+>/)
    if (skipTag) {
      pos += skipTag[0].length
      continue
    }

    // Plain text outside tags — treat as paragraph
    const textMatch = remaining.match(/^([^<]+)/)
    if (textMatch && textMatch[1].trim()) {
      blocks.push({
        type: 'paragraph',
        children: [{ type: 'text', text: decode(textMatch[1].trim()) }],
      })
      pos += textMatch[0].length
      continue
    }

    pos++
  }

  return blocks
}

function parseInline(html) {
  if (!html || !html.trim()) return [{ type: 'text', text: '' }]

  const children = []
  let pos = 0

  while (pos < html.length) {
    const remaining = html.slice(pos)

    // <a href="...">...</a>
    const aMatch = remaining.match(/^<a\s[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/is)
    if (aMatch) {
      children.push({
        type: 'link',
        url: aMatch[1],
        children: [{ type: 'text', text: decode(aMatch[2].replace(/<[^>]+>/g, '')) }],
      })
      pos += aMatch[0].length
      continue
    }

    // <strong> or <b>
    const boldMatch = remaining.match(/^<(strong|b)(\s[^>]*)?>(.+?)<\/\1>/is)
    if (boldMatch) {
      children.push({ type: 'text', text: decode(boldMatch[3].replace(/<[^>]+>/g, '')), bold: true })
      pos += boldMatch[0].length
      continue
    }

    // <em> or <i>
    const italicMatch = remaining.match(/^<(em|i)(\s[^>]*)?>(.+?)<\/\1>/is)
    if (italicMatch) {
      children.push({ type: 'text', text: decode(italicMatch[3].replace(/<[^>]+>/g, '')), italic: true })
      pos += italicMatch[0].length
      continue
    }

    // <u>
    const uMatch = remaining.match(/^<u(\s[^>]*)?>(.+?)<\/u>/is)
    if (uMatch) {
      children.push({ type: 'text', text: decode(uMatch[2].replace(/<[^>]+>/g, '')), underline: true })
      pos += uMatch[0].length
      continue
    }

    // <br>
    const brMatch = remaining.match(/^<br\s*\/?>/)
    if (brMatch) {
      children.push({ type: 'text', text: '\n' })
      pos += brMatch[0].length
      continue
    }

    // Skip other tags
    const tagMatch = remaining.match(/^<[^>]+>/)
    if (tagMatch) {
      pos += tagMatch[0].length
      continue
    }

    // Plain text
    const textMatch = remaining.match(/^[^<]+/)
    if (textMatch) {
      children.push({ type: 'text', text: decode(textMatch[0]) })
      pos += textMatch[0].length
      continue
    }

    pos++
  }

  return children.length > 0 ? children : [{ type: 'text', text: '' }]
}

function parseFigure(inner) {
  const imgMatch = inner.match(/<img\s[^>]*src="([^"]*)"[^>]*/)
  if (!imgMatch) return null

  const url = imgMatch[1]
  const altMatch = inner.match(/alt="([^"]*)"/)
  const alt = altMatch ? altMatch[1] : ''

  const captionMatch = inner.match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/i)
  const caption = captionMatch ? decode(captionMatch[1].replace(/<[^>]+>/g, '').trim()) : ''

  return {
    type: 'image',
    image: {
      url,
      alternativeText: alt,
      ...(caption ? { caption } : {}),
    },
  }
}

function decode(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

// ---- Original article HTML (from seed script) ----

const articlesHtml = {
  'meh-v-sovremennyh-kollekciyah': `<p>Я заметил интересную тенденцию: мех перестаёт быть атрибутом исключительно люксового сегмента и возвращается в повседневную моду. Крупные российские бренды включают меховые изделия в свои коллекции — и делают это с неожиданной смелостью. Для меня это знак того, что мех снова становится частью культурного кода, а не просто символом статуса.</p><figure><img src="/images/production/workshop-hands-sobol.jpg" alt="Меховые изделия в современных коллекциях" style="width:100%;object-fit:cover" /><figcaption style="font-size:12px;color:#999;text-align:center;margin-top:8px;user-select:none;-webkit-user-select:none">profashion.ru</figcaption></figure><h2>Befree и «Комбинация»: мех как ностальгия</h2><p>Коллаборация Befree с сериалом «Комбинация» — это пример того, как мех может рассказывать историю. В капсульную коллекцию вошли меховые шубы, платья с рукавами-фонариками, сапоги-гармошки и шапки-боярки — всё это переосмысление эстетики 1990-х для современного покупателя.</p><p>Подобно тому, как винтажные вещи обретают новую жизнь на блошиных рынках, эта коллекция берёт узнаваемые образы прошлого и наполняет их современным звучанием. Но есть существенное отличие: это не реплика и не костюм для вечеринки — это вещи, которые можно носить в обычной жизни, чувствуя себя при этом особенной.</p><h2>Zarina и Александр Рогов: стиль как высказывание</h2><p>Совместная коллекция Zarina и стилиста Александра Рогова — другая грань этой тенденции. Здесь мех и пальто соседствуют с рубашками с бантами, жакетами и сумками. Мех не выделяется как отдельная «категория роскоши» — он органично вписывается в общий гардероб, как одна из составляющих цельного образа.</p><p>Мне нравится этот подход. Когда пальто или шуба существуют не как «выходная вещь», а как часть вашего ежедневного стиля — это говорит о зрелости и моды, и покупателя. Вы сами формируете свой образ и сами решаете, когда и с чем носить мех.</p><figure><img src="/images/hero-bg.jpg" alt="Современная меховая мода" style="width:100%;object-fit:cover" /><figcaption style="font-size:12px;color:#999;text-align:center;margin-top:8px;user-select:none;-webkit-user-select:none">profashion.ru</figcaption></figure><h2>Что стоит за этим трендом</h2><p>В глобальном масштабе мы видим, как мода движется по спирали: вещи, которые считались «устаревшими», возвращаются — но уже на новом уровне. Мех не исключение. Сегодня шуба — это не «бабушкина вещь» и не «статусный атрибут». Это элемент осознанного стиля, часть продуманного гардероба.</p><p>Я убеждён, что мех в массовых коллекциях — это не удешевление роскоши, а её демократизация. И это хорошо для всех: у бренда появляется возможность показать мастерство, а у вас — попробовать и понять, какой мех ваш. Почувствовать текстуру, оценить вес, примерить силуэт — и решить для себя.</p><p>Когда вы понимаете, что мех — это именно то, что вам нужно, следующий шаг — обратиться к мастерам, которые создадут вещь уже под вас, с учётом вашей фигуры, вашего стиля и вашей жизни.</p>`,

  'palto-s-membrannoj-tehnologiej': `<p>Есть вопрос, который знаком каждой женщине в России: как выглядеть элегантно в пальто, когда за окном то дождь, то мокрый снег, то пронизывающий ветер? Я долго наблюдал за тем, как индустрия пытается решить эту задачу, и могу сказать — по-настоящему убедительное решение пришло именно от российского производителя.</p><figure><img src="/images/product-palto.jpg" alt="Элегантное пальто с мембранной технологией" style="width:100%;object-fit:cover" /><figcaption style="font-size:12px;color:#999;text-align:center;margin-top:8px;user-select:none;-webkit-user-select:none">profashion.ru</figcaption></figure><h2>Технология RaftPro: невидимая защита</h2><p>Бренд Pompa из Санкт-Петербурга уже 25 лет работает над тем, чтобы пальто стало по-настоящему функциональным без потери эстетики. Их ключевая разработка — мембрана RaftPro: ультратонкий слой между шерстяной тканью и подкладкой, который обеспечивает водостойкость и воздухопроницаемость.</p><p>Подобно мембранам в спортивной одежде, RaftPro не пропускает воду снаружи, но позволяет телу дышать. Однако принципиальное отличие — эта технология работает с премиальными итальянскими и французскими шерстяными и кашемировыми тканями. Вы получаете все свойства функциональной одежды, сохраняя при этом вид и ощущение настоящего кашемирового пальто.</p><h2>Дизайн для российских реалий</h2><p>Мне импонирует в подходе Pompa то, что они не пытаются быть «как европейские бренды». Их коллекции изначально разрабатываются с учётом телосложения российских женщин и нашего климата. Это не адаптация чужого — это создание своего.</p><p>При этом ткани — премиальные, из Италии и Франции. Такое сочетание — лучшие мировые материалы и дизайн, который понимает вас — это именно то, что я считаю настоящей роскошью. Не бренд на этикетке, а вещь, которая работает для вас в вашей жизни.</p><figure><img src="/images/about-bg.jpg" alt="Процесс создания пальто в ателье" style="width:100%;object-fit:cover" /><figcaption style="font-size:12px;color:#999;text-align:center;margin-top:8px;user-select:none;-webkit-user-select:none">profashion.ru</figcaption></figure><h2>Как выбрать пальто, которое не подведёт</h2><p>В глобальном смысле выбор пальто — это выбор между компромиссами. Красивое, но промокает. Тёплое, но выглядит как куртка. Функциональное, но скучное. Технология мембраны снимает большинство этих противоречий, и я считаю, что это направление будет только набирать силу.</p><p>Вы сами знаете, что вам нужно от пальто. Доверяйте этому знанию. Если вы живёте в городе с непредсказуемой погодой — а это вся Россия — обращайте внимание на то, что скрыто под подкладкой. Именно там часто прячется разница между «красивым пальто» и «пальто, которое вы будете носить с удовольствием каждый день».</p>`,

  'novye-premialnye-brendy-meha': `<p>Российский рынок премиальной меховой моды переживает момент, который я бы назвал «тихой революцией». На сцену выходят молодые бренды, которые не копируют западные образцы, а предлагают собственное видение роскоши.</p><figure><img src="/images/product-sobol.jpg" alt="Премиальные меховые изделия" style="width:100%;object-fit:cover" /><figcaption style="font-size:12px;color:#999;text-align:center;margin-top:8px;user-select:none;-webkit-user-select:none">profashion.ru</figcaption></figure><h2>Sencellerie: когда за брендом стоит производство</h2><p>Бренд Sencellerie появился в 2022 году. За ним стоят люди, которые знают мех изнутри: основатель меховой фабрики Кирилл Раструбин и его партнёр Рамзан Заузанов. Это не дизайнеры, решившие «попробовать мех» — это производственники, которые пришли в дизайн.</p><p>Sencellerie работает со скандинавским и российским сырьём, создавая изделия из овчины, меха яка, песца и норки, а также куртки из натуральной кожи. Как и лучшие европейские бренды, они делают ставку на премиальные материалы. Но принципиальное отличие — производство шуб происходит в России.</p><h2>Общая картина</h2><p>Что их объединяет — и что мне кажется по-настоящему важным — это отказ от слепого копирования. Каждый из этих брендов строит собственную философию. И именно поэтому выбирать между ними интересно: вы не выбираете между «одинаковым» — вы выбираете между разным, и каждый вариант по-своему ценен.</p><figure><img src="/images/product-kozha.jpg" alt="Изделия из кожи премиум-класса" style="width:100%;object-fit:cover" /><figcaption style="font-size:12px;color:#999;text-align:center;margin-top:8px;user-select:none;-webkit-user-select:none">profashion.ru</figcaption></figure><h2>Почему это важно для вас</h2><p>Когда на рынке появляются новые сильные игроки, выигрывает в первую очередь покупатель. У вас появляется настоящий выбор. Я вижу, что российская меховая индустрия выходит на новый виток. Лучшее решение — сравнить самостоятельно и довериться собственным ощущениям. Качество настоящего меха вы всегда почувствуете.</p>`,

  'ekomeh-v-vysokoj-mode': `<p>Я наблюдаю за трансформацией меховой индустрии уже не первый год, и то, что происходит сейчас, меняет всё представление о роскоши. Когда один из самых влиятельных домов моды полностью отказывается от натурального меха и при этом создаёт шубы, за которыми выстраивается очередь — это не просто тренд. Это новая реальность.</p><figure><img src="/images/subhero-2.jpg" alt="Экомеховое пальто haute couture" style="width:100%;object-fit:cover" /><figcaption style="font-size:12px;color:#999;text-align:center;margin-top:8px;user-select:none;-webkit-user-select:none">balenciaga.com</figcaption></figure><h2>Решение, которое изменило индустрию</h2><p>В 2021 году Balenciaga официально закрепила политику fur-free. Я считаю, что именно в этом проявляется подлинная уверенность: не ждать, пока рынок заставит тебя измениться, а изменить рынок самому.</p><h2>Кутюрные технологии экомеха</h2><p>Коллекция Fall 2024 Couture — это то, что заставляет пересмотреть все стереотипы об искусственном мехе. Здесь применяется техника marquetry — крошечные полоски экомеха вырезаются и сшиваются вручную в рисунок «ёлочка». На создание одного такого пальто уходит около семи с половиной недель.</p><p>Подобно работе с натуральным мехом, кутюрный экомех требует ручного труда и мастерства. Но есть важное отличие: синтетические волокна позволяют добиться эффектов, невозможных с натуральным материалом. Производство одной шубы занимает около двух с половиной месяцев.</p><figure><img src="/images/subhero-1.jpg" alt="Детали кутюрной работы" style="width:100%;object-fit:cover" /><figcaption style="font-size:12px;color:#999;text-align:center;margin-top:8px;user-select:none;-webkit-user-select:none">balenciaga.com</figcaption></figure><h2>Что это значит для нас</h2><p>В глобальном масштабе мы наблюдаем, как понятие «роскошь» отвязывается от конкретного материала и привязывается к мастерству, времени и вниманию, вложенным в изделие.</p><p>Я убеждён: будущее меховой моды — это не выбор между натуральным и искусственным. Это выбор между вещью, в которую вложена душа, и вещью, которая просто выглядит дорого. И этот выбор каждый делает для себя.</p>`,

  'rossijskie-mehovye-fabriki': `<p>Я давно наблюдаю за тем, как меняется российская меховая индустрия. Сегодня отечественные производства выходят на уровень, который ещё десять лет назад казался недостижимым.</p><figure><img src="/images/production/workshop-table-01.jpg" alt="Производство меховых изделий" style="width:100%;object-fit:cover" /><figcaption style="font-size:12px;color:#999;text-align:center;margin-top:8px;user-select:none;-webkit-user-select:none">profashion.ru</figcaption></figure><h2>Фабрика Simakhov: когда мех — это характер</h2><p>Компания Simakhov работает с 1999 года в Пятигорске. Их производство охватывает весь цикл: от подбора сырья до финальной отделки. Подобно европейским домам моды, Simakhov делает ставку на качество, но с важным отличием — их изделия изначально проектируются для российского климата.</p><p>Сегодня фабрика работает с натуральным мехом, овечьей шерстью и экомехом. Для меня это признак зрелого бренда — когда вам дают свободу решать самостоятельно.</p><h2>Фабрика ЗИМОС: полный цикл от фермы до шубы</h2><p>ЗИМОС — это компания полного цикла, которая контролирует всё: от собственной звероводческой фермы до розничных продаж. Они работают с норкой, каракулем, рысью и соболем. Размерный ряд от 42 до 60 — настоящая роскошь не ограничивается стандартными размерами.</p><figure><img src="/images/product-norka.jpg" alt="Шуба из норки" style="width:100%;object-fit:cover" /><figcaption style="font-size:12px;color:#999;text-align:center;margin-top:8px;user-select:none;-webkit-user-select:none">profashion.ru</figcaption></figure><h2>Что объединяет лучших</h2><p>Российские меховые фабрики перестают быть просто «заводами» и становятся настоящими модными домами. Вы сами чувствуете разницу, когда берёте в руки изделие, за которым стоит настоящее производство.</p>`,
}

// ---- Main ----

async function main() {
  console.log('Fetching blog posts from Strapi...\n')

  const res = await fetch(
    `${STRAPI_URL}/api/blog-posts?pagination[pageSize]=100`,
    { headers }
  )

  if (!res.ok) {
    console.error('Failed to fetch posts:', res.status, await res.text())
    return
  }

  const data = await res.json()
  const posts = data.data || []
  console.log(`Found ${posts.length} posts\n`)

  for (const post of posts) {
    const docId = post.documentId || post.id
    const slug = post.slug
    const title = post.title

    const html = articlesHtml[slug]
    if (!html) {
      console.log(`⏭ "${title}" (${slug}) — no source HTML, skipping`)
      continue
    }

    console.log(`🔄 "${title}" — converting...`)
    const blocks = htmlToBlocks(html)
    console.log(`   Generated ${blocks.length} blocks`)

    // Debug: show block types
    const types = blocks.map(b => b.type)
    console.log(`   Types: ${types.join(', ')}`)

    // Update the post
    const updateRes = await fetch(
      `${STRAPI_URL}/api/blog-posts/${docId}`,
      {
        method: 'PUT',
        headers,
        body: JSON.stringify({ data: { content: blocks } }),
      }
    )

    if (updateRes.ok) {
      console.log(`   ✓ Updated`)

      // Publish
      const pubRes = await fetch(
        `${STRAPI_URL}/api/blog-posts/${docId}?status=published`,
        {
          method: 'PUT',
          headers,
          body: JSON.stringify({ data: {} }),
        }
      )
      console.log(`   ✓ Published: ${pubRes.ok}`)
    } else {
      const err = await updateRes.text()
      console.log(`   ✗ Failed: ${updateRes.status} ${err.slice(0, 300)}`)
    }

    console.log()
  }

  console.log('Done!')
}

main()
