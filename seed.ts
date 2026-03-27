import { getPayload } from 'payload'
import config from './payload.config'

const ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL || 'admin@mary-belle.ru'
const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD

async function seed() {
  if (!ADMIN_PASSWORD) {
    console.error('ERROR: Set SEED_ADMIN_PASSWORD env var before running seed')
    process.exit(1)
  }

  const payload = await getPayload({ config })

  console.log('🌱 Начинаем заполнение CMS данными...\n')

  // ========== СОЗДАЁМ АДМИНА ==========
  const existingUsers = await payload.find({ collection: 'users', limit: 1 })
  if (existingUsers.totalDocs === 0) {
    console.log('👤 Создаём администратора...')
    try {
      await payload.create({
        collection: 'users',
        data: {
          email: ADMIN_EMAIL,
          password: ADMIN_PASSWORD,
          name: 'Администратор',
          role: 'admin',
        },
        overrideAccess: true,
      })
      console.log(`  ✓ Админ создан: ${ADMIN_EMAIL}`)
    } catch (e: any) {
      console.log(`  ✗ Ошибка: ${e.message}`)
    }
  } else {
    console.log('👤 Администратор уже существует, пропускаем.')
  }

  // ========== УСЛУГИ ==========
  const servicesData = [
    {
      title: 'Ремонт шуб',
      slug: 'remont-shub',
      description: 'Реставрация норковых, соболиных и каракулевых шуб любой сложности — замена подкладки, ремонт швов, перекрой.',
      icon: '/icons/services/repair.svg',
      image: '/images/uslugi-remont-mehov.jpg',
      sortOrder: 1,
    },
    {
      title: 'Ремонт кожи и дублёнок',
      slug: 'remont-kozhi',
      description: 'Восстановление кожаных курток, дублёнок и аксессуаров. Окрашивание, замена фурнитуры, реставрация.',
      icon: '/icons/services/leather.svg',
      image: '/images/uslugi-remont-kozhi.jpg',
      sortOrder: 2,
    },
    {
      title: 'Индивидуальный пошив',
      slug: 'poshiv-shub',
      description: 'Пошив шуб и пальто на заказ из норки, соболя, каракуля. Три примерки, авторский крой.',
      icon: '/icons/services/sewing.svg',
      image: '/images/uslugi-poshiv.jpg',
      sortOrder: 3,
    },
    {
      title: 'Меховой холодильник',
      slug: 'mehovoj-holodilnik',
      description: 'Хранение шуб при +5°C и влажности 50–60%. Защита от моли, страховка, курьер по Москве.',
      icon: '/icons/services/storage.svg',
      image: '/images/uslugi-holodilnik.jpg',
      sortOrder: 4,
    },
    {
      title: 'Окрашивание меха',
      slug: 'okrashivanie',
      description: 'Покраска шубы из норки и других мехов. Полное окрашивание, тонирование, эффект омбре.',
      icon: '/icons/services/coloring.svg',
      image: '/images/uslugi-okrashivanie.jpg',
      sortOrder: 5,
    },
    {
      title: 'Химчистка',
      slug: 'himchistka',
      description: 'Профессиональная чистка меховых и кожаных изделий. Удаление загрязнений, антимольная обработка.',
      icon: '/icons/services/cleaning.svg',
      image: '/images/uslugi-himchistka.jpg',
      sortOrder: 6,
    },
    {
      title: 'Перекрой шубы',
      slug: 'perekroj',
      description: 'Новый фасон из старой шубы — перешив, укорачивание, модернизация. Полный и частичный перекрой.',
      icon: '/icons/services/repair.svg',
      image: '/images/uslugi-perekroj.jpg',
      sortOrder: 7,
    },
    {
      title: 'Ремонт пальто',
      slug: 'remont-palto',
      description: 'Реставрация шерстяных, кашемировых и драповых пальто. Замена подкладки, ремонт швов.',
      icon: '/icons/services/sewing.svg',
      image: '/images/product-palto.jpg',
      sortOrder: 8,
    },
    {
      title: 'Ремонт брендовой одежды',
      slug: 'remont-brendovoj-odezhdy',
      description: 'Moncler, Max Mara, Burberry — работаем с люксовыми брендами. Оригинальная фурнитура.',
      icon: '/icons/services/leather.svg',
      image: '/images/uslugi-brendovaya.jpg',
      sortOrder: 9,
    },
  ]

  console.log('📦 Загружаем услуги...')
  for (const service of servicesData) {
    try {
      await payload.create({ collection: 'services', data: service })
      console.log(`  ✓ ${service.title}`)
    } catch (e: any) {
      console.log(`  ✗ ${service.title}: ${e.message}`)
    }
  }

  // ========== ПРАЙС-ЛИСТ ==========
  const pricesData = [
    {
      categoryName: 'Перекрой',
      slug: 'perekroj',
      sortOrder: 1,
      items: [
        { label: 'Полный перекрой', price: '96 000 ₽' },
        { label: 'Частичный перекрой', price: '67 000 ₽' },
      ],
    },
    {
      categoryName: 'Мелкий ремонт',
      slug: 'melkij-remont',
      sortOrder: 2,
      items: [
        { label: 'Пришить вешалку (без стоимости)', price: '600 ₽' },
        { label: 'Изготовить и пришить вешалку', price: '1 000 ₽' },
        { label: 'Замена крючка шубного (с учётом стоимости)', price: '1 500 ₽' },
        { label: 'Замена крючка обтяжного (с учётом стоимости)', price: '900 ₽' },
        { label: 'Замена кулиски (без стоимости кулиски)', price: '1 500 ₽' },
        { label: 'Замена пуговицы (без учёта стоимости)', price: '750 ₽' },
        { label: 'Замена фурнитуры (фиксаторы, наконечники)', price: '950 ₽' },
        { label: 'Зашить разрыв (2 / 4 / 6 / 8–10 см)', price: '2 000 / 1 500 / 1 800 / 3 000 ₽' },
        { label: 'Поставить заплатку (4×4 / 6×6 / 8×8 см)', price: '3 500 / 5 500 / 8 500 ₽' },
        { label: 'Замена плечиков (без учёта стоимости)', price: 'от 1 100 ₽' },
      ],
    },
    {
      categoryName: 'Низ изделия',
      slug: 'niz-izdeliya',
      sortOrder: 3,
      items: [
        { label: 'Укоротить / удлинить низ (подкладка наглухо)', price: 'от 13 000 ₽' },
        { label: 'Укоротить / удлинить низ (подкладка отлетная)', price: 'от 15 000 ₽' },
        { label: 'Ремонт шлицы', price: 'от 8 000 ₽' },
        { label: 'Реставрация низа', price: 'от 12 000 ₽' },
      ],
    },
    {
      categoryName: 'Рукава и плечи',
      slug: 'rukava-i-plechi',
      sortOrder: 4,
      items: [
        { label: 'Укоротить / удлинить рукава без манжет', price: 'от 5 800 ₽' },
        { label: 'Укоротить / удлинить рукава с манжетами', price: 'от 7 200 ₽' },
        { label: 'Заузить / расширить', price: 'от 6 000 ₽' },
        { label: 'Коррекция оката проймы', price: 'от 7 800 ₽' },
        { label: 'Реставрация низа без манжет', price: 'от 4 200 ₽' },
        { label: 'Реставрация низа с манжетами', price: 'от 6 200 ₽' },
        { label: 'Перекрой рукава', price: 'от 7 200 ₽' },
        { label: 'Перекрой плечевого пояса', price: 'от 15 000 ₽' },
        { label: 'Ушить плечевой шов', price: 'от 3 800 ₽' },
      ],
    },
    {
      categoryName: 'Борт / боковые и средние швы',
      slug: 'bort-shvy',
      sortOrder: 5,
      items: [
        { label: 'Ушить по боковым швам', price: 'от 6 500 ₽' },
        { label: 'Ушить по среднему шву', price: 'от 6 800 ₽' },
        { label: 'Ушить по среднему шву с разрезом, шлицей', price: 'от 6 800 ₽' },
        { label: 'Выравнивание бортов', price: 'от 14 000 ₽' },
        { label: 'Реставрация бортов', price: 'от 10 000 ₽' },
      ],
    },
    {
      categoryName: 'Подкладка',
      slug: 'podkladka',
      sortOrder: 6,
      items: [
        { label: 'Замена подкладки без утеплителя', price: '15 000 ₽' },
        { label: 'Замена подкладки с утеплителем', price: 'от 20 000 ₽' },
        { label: 'Частичная реставрация подкладки', price: '5 500–8 200 ₽' },
      ],
    },
    {
      categoryName: 'Воротник',
      slug: 'vorotnik',
      sortOrder: 7,
      items: [
        { label: 'Изменение выреза горловины', price: 'от 7 700 ₽' },
        { label: 'Изменить фасон воротника', price: 'от 10 000 ₽' },
        { label: 'Замена воротника', price: 'от 13 000 ₽' },
        { label: 'Изготовить воротник без подкладки', price: 'от 13 000 ₽' },
        { label: 'Изготовить воротник с подкладкой', price: 'от 14 000 ₽' },
      ],
    },
    {
      categoryName: 'Капюшон',
      slug: 'kapyushon',
      sortOrder: 8,
      items: [
        { label: 'Изменить фасон капюшона', price: 'от 16 800 ₽' },
        { label: 'Изготовить капюшон', price: 'от 25 000 ₽' },
      ],
    },
    {
      categoryName: 'Опушка',
      slug: 'opushka',
      sortOrder: 9,
      items: [
        { label: 'Изготовить опушку', price: 'от 7 000 ₽' },
        { label: 'Пришить опушку', price: 'от 6 000 ₽' },
      ],
    },
    {
      categoryName: 'Карманы',
      slug: 'karmany',
      sortOrder: 10,
      items: [
        { label: 'Реставрация карманов', price: '7 800 ₽' },
        { label: 'Замена подкладки в карманах', price: '3 000 ₽' },
        { label: 'Изготовление карманов', price: '6 500 ₽' },
      ],
    },
    {
      categoryName: 'Ластовицы и другое',
      slug: 'lastovicy',
      sortOrder: 11,
      items: [
        { label: 'Ремонт 2 подмышек с добавлением меха', price: '18 000 ₽' },
        { label: 'Ушить рукава по внутренним швам', price: '7 500 ₽' },
        { label: 'Уменьшить в плечах', price: 'от 7 500 ₽' },
        { label: 'Ушить по боковым швам', price: 'от 12 000 ₽' },
      ],
    },
    {
      categoryName: 'Хранение шуб',
      slug: 'hranenie',
      sortOrder: 12,
      items: [
        { label: 'Хранение шубы (сезон, апрель–октябрь)', price: 'от 5 000 ₽' },
        { label: 'Хранение дублёнки (сезон)', price: 'от 3 500 ₽' },
        { label: 'Забор курьером по Москве', price: '1 500 ₽' },
        { label: 'Доставка обратно', price: '1 500 ₽' },
      ],
    },
    {
      categoryName: 'Химчистка',
      slug: 'himchistka',
      sortOrder: 13,
      items: [
        { label: 'Химчистка шубы', price: 'от 5 000 ₽' },
        { label: 'Химчистка дублёнки', price: 'от 4 000 ₽' },
        { label: 'Химчистка кожаной куртки', price: 'от 3 000 ₽' },
        { label: 'Антимольная обработка', price: 'от 1 500 ₽' },
      ],
    },
    {
      categoryName: 'Окрашивание меха',
      slug: 'okrashivanie',
      sortOrder: 14,
      items: [
        { label: 'Окрашивание шубы (полное)', price: 'от 12 000 ₽' },
        { label: 'Тонирование', price: 'от 8 000 ₽' },
        { label: 'Окрашивание жилета', price: 'от 7 000 ₽' },
        { label: 'Окрашивание воротника / манжет', price: 'от 3 000 ₽' },
      ],
    },
  ]

  console.log('\n💰 Загружаем прайс-лист...')
  for (const cat of pricesData) {
    try {
      await payload.create({ collection: 'prices', data: cat })
      console.log(`  ✓ ${cat.categoryName} (${cat.items.length} позиций)`)
    } catch (e: any) {
      console.log(`  ✗ ${cat.categoryName}: ${e.message}`)
    }
  }

  // ========== ОТЗЫВЫ ==========
  const reviewsData = [
    {
      name: 'Елена М.',
      text: 'Отличное ателье! Переделала здесь несколько шуб, работа выполнена качественно и в срок. Очень довольна результатом, всем рекомендую!',
      rating: 5,
      service: 'Перекрой шубы',
      visible: true,
    },
    {
      name: 'Андрей К.',
      text: 'Сдавал на хранение меховые изделия. Все организовано на высшем уровне, удобно, что есть услуга доставки. Спасибо!',
      rating: 5,
      service: 'Хранение шуб',
      visible: true,
    },
    {
      name: 'Наталья В.',
      text: 'Хорошее качество работы, но сроки немного затянулись. В целом осталась довольна результатом, буду обращаться ещё.',
      rating: 4,
      service: 'Ремонт шубы',
      visible: true,
    },
    {
      name: 'Ирина С.',
      text: 'Покрасили норковую шубу — как новая! Цвет ровный, мех мягкий. Мастера знают своё дело. Рекомендую.',
      rating: 5,
      service: 'Окрашивание меха',
      visible: true,
    },
    {
      name: 'Марина Д.',
      text: 'Заказывала пошив шубы из норки. Три примерки, всё подогнали идеально. Качество на высоте, спасибо фабрике!',
      rating: 5,
      service: 'Пошив шубы',
      visible: true,
    },
  ]

  console.log('\n⭐ Загружаем отзывы...')
  for (const review of reviewsData) {
    try {
      await payload.create({ collection: 'reviews', data: review })
      console.log(`  ✓ ${review.name}`)
    } catch (e: any) {
      console.log(`  ✗ ${review.name}: ${e.message}`)
    }
  }

  // ========== ПОРТФОЛИО ==========
  const portfolioData = [
    {
      title: 'Реставрация норковой шубы',
      slug: 'restavratsiya-norkovoj-shuby',
      description: 'Полная реставрация классической норковой шубы: замена подкладки, ремонт бортов, обновление фурнитуры.',
      category: 'remont',
      sortOrder: 1,
    },
    {
      title: 'Окрашивание в тёмный оттенок',
      slug: 'okrashivanie-v-temnyj-ottenok',
      description: 'Профессиональное окрашивание светлой норковой шубы в насыщенный тёмно-коричневый цвет.',
      category: 'okrashivanie',
      sortOrder: 2,
    },
    {
      title: 'Перекрой в жилет',
      slug: 'perekroj-v-zhilet',
      description: 'Перекрой длинной норковой шубы в стильный меховой жилет. Полное изменение фасона.',
      category: 'perekroj',
      sortOrder: 3,
    },
  ]

  console.log('\n🖼️  Загружаем портфолио...')
  for (const item of portfolioData) {
    try {
      await payload.create({ collection: 'portfolio', data: item })
      console.log(`  ✓ ${item.title}`)
    } catch (e: any) {
      console.log(`  ✗ ${item.title}: ${e.message}`)
    }
  }

  console.log('\n✅ Заполнение завершено!')
  console.log('\n📊 Итого:')
  console.log(`  Услуг: ${servicesData.length}`)
  console.log(`  Категорий прайса: ${pricesData.length}`)
  console.log(`  Отзывов: ${reviewsData.length}`)
  console.log(`  Портфолио: ${portfolioData.length}`)

  process.exit(0)
}

seed().catch((err) => {
  console.error('Ошибка seed:', err)
  process.exit(1)
})
