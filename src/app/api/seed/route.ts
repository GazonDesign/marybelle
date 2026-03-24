import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { products } from '@/data/products'

export async function POST() {
  try {
    const payload = await getPayload({ config })
    const log: string[] = []

    // ========== АДМИН ==========
    const existingUsers = await payload.find({ collection: 'users', limit: 1, overrideAccess: true })
    if (existingUsers.totalDocs === 0) {
      await payload.create({
        collection: 'users',
        data: { email: 'admin@mary-belle.ru', password: 'MaryBelle2026!', name: 'Администратор', role: 'admin' },
        overrideAccess: true,
      })
      log.push('✓ Админ создан: admin@mary-belle.ru / MaryBelle2026!')
    } else {
      log.push('→ Админ уже есть')
    }

    // ========== УСЛУГИ ==========
    const existingServices = await payload.find({ collection: 'services', limit: 1 })
    if (existingServices.totalDocs === 0) {
      const servicesData = [
        { title: 'Ремонт шуб', slug: 'remont-shub', description: 'Реставрация норковых, соболиных и каракулевых шуб любой сложности — замена подкладки, ремонт швов, перекрой.', icon: '/icons/services/repair.svg' },
        { title: 'Ремонт кожи и дублёнок', slug: 'remont-kozhi', description: 'Восстановление кожаных курток, дублёнок и аксессуаров. Окрашивание, замена фурнитуры, реставрация.', icon: '/icons/services/leather.svg' },
        { title: 'Индивидуальный пошив', slug: 'poshiv-shub', description: 'Пошив шуб и пальто на заказ из норки, соболя, каракуля. Три примерки, авторский крой.', icon: '/icons/services/sewing.svg' },
        { title: 'Меховой холодильник', slug: 'mehovoj-holodilnik', description: 'Хранение шуб при +5°C и влажности 50–60%. Защита от моли, страховка, курьер по Москве.', icon: '/icons/services/storage.svg' },
        { title: 'Окрашивание меха', slug: 'okrashivanie', description: 'Покраска шубы из норки и других мехов. Полное окрашивание, тонирование, эффект омбре.', icon: '/icons/services/coloring.svg' },
        { title: 'Химчистка', slug: 'himchistka', description: 'Профессиональная чистка меховых и кожаных изделий. Удаление загрязнений, антимольная обработка.', icon: '/icons/services/cleaning.svg' },
        { title: 'Перекрой шубы', slug: 'perekroj', description: 'Новый фасон из старой шубы — перешив, укорачивание, модернизация. Полный и частичный перекрой.', icon: '/icons/services/repair.svg' },
        { title: 'Ремонт пальто', slug: 'remont-palto', description: 'Реставрация шерстяных, кашемировых и драповых пальто. Замена подкладки, ремонт швов.', icon: '/icons/services/sewing.svg' },
        { title: 'Ремонт брендовой одежды', slug: 'remont-brendovoj-odezhdy', description: 'Moncler, Max Mara, Burberry — работаем с люксовыми брендами. Оригинальная фурнитура.', icon: '/icons/services/leather.svg' },
      ]
      for (const s of servicesData) {
        await payload.create({ collection: 'services', data: s, overrideAccess: true })
      }
      log.push(`✓ Услуг: ${servicesData.length}`)
    } else {
      log.push('→ Услуги уже есть')
    }

    // ========== ПРАЙС ==========
    const existingPrices = await payload.find({ collection: 'prices', limit: 1 })
    if (existingPrices.totalDocs === 0) {
      const pricesData = [
        { categoryName: 'Перекрой', slug: 'perekroj', sortOrder: 1, items: [{ label: 'Полный перекрой', price: '96 000 ₽' }, { label: 'Частичный перекрой', price: '67 000 ₽' }] },
        { categoryName: 'Мелкий ремонт', slug: 'melkij-remont', sortOrder: 2, items: [{ label: 'Пришить вешалку', price: '600 ₽' }, { label: 'Замена крючка шубного', price: '1 500 ₽' }, { label: 'Замена пуговицы', price: '750 ₽' }, { label: 'Зашить разрыв', price: 'от 1 500 ₽' }, { label: 'Поставить заплатку', price: 'от 3 500 ₽' }] },
        { categoryName: 'Низ изделия', slug: 'niz-izdeliya', sortOrder: 3, items: [{ label: 'Укоротить/удлинить низ', price: 'от 13 000 ₽' }, { label: 'Ремонт шлицы', price: 'от 8 000 ₽' }] },
        { categoryName: 'Рукава и плечи', slug: 'rukava-i-plechi', sortOrder: 4, items: [{ label: 'Укоротить/удлинить рукава', price: 'от 5 800 ₽' }, { label: 'Заузить/расширить', price: 'от 6 000 ₽' }, { label: 'Перекрой плечевого пояса', price: 'от 15 000 ₽' }] },
        { categoryName: 'Подкладка', slug: 'podkladka', sortOrder: 5, items: [{ label: 'Замена подкладки без утеплителя', price: '15 000 ₽' }, { label: 'Замена подкладки с утеплителем', price: 'от 20 000 ₽' }] },
        { categoryName: 'Воротник и капюшон', slug: 'vorotnik', sortOrder: 6, items: [{ label: 'Изменить фасон воротника', price: 'от 10 000 ₽' }, { label: 'Замена воротника', price: 'от 13 000 ₽' }, { label: 'Изготовить капюшон', price: 'от 25 000 ₽' }] },
        { categoryName: 'Хранение шуб', slug: 'hranenie', sortOrder: 7, items: [{ label: 'Хранение шубы (сезон)', price: 'от 5 000 ₽' }, { label: 'Хранение дублёнки', price: 'от 3 500 ₽' }, { label: 'Забор/доставка курьером', price: '1 500 ₽' }] },
        { categoryName: 'Химчистка', slug: 'himchistka', sortOrder: 8, items: [{ label: 'Химчистка шубы', price: 'от 5 000 ₽' }, { label: 'Химчистка дублёнки', price: 'от 4 000 ₽' }, { label: 'Антимольная обработка', price: 'от 1 500 ₽' }] },
        { categoryName: 'Окрашивание', slug: 'okrashivanie', sortOrder: 9, items: [{ label: 'Окрашивание шубы (полное)', price: 'от 12 000 ₽' }, { label: 'Тонирование', price: 'от 8 000 ₽' }] },
      ]
      for (const p of pricesData) {
        await payload.create({ collection: 'prices', data: p, overrideAccess: true })
      }
      log.push(`✓ Категорий прайса: ${pricesData.length}`)
    } else {
      log.push('→ Прайс уже есть')
    }

    // ========== ОТЗЫВЫ ==========
    const existingReviews = await payload.find({ collection: 'reviews', limit: 1 })
    if (existingReviews.totalDocs === 0) {
      const reviewsData = [
        { name: 'Елена М.', text: 'Отличное ателье! Переделала здесь несколько шуб, работа выполнена качественно и в срок.', rating: 5, service: 'Перекрой шубы', visible: true },
        { name: 'Андрей К.', text: 'Сдавал на хранение меховые изделия. Все организовано на высшем уровне, удобно, что есть доставка.', rating: 5, service: 'Хранение шуб', visible: true },
        { name: 'Наталья В.', text: 'Хорошее качество работы, но сроки немного затянулись. В целом довольна результатом.', rating: 4, service: 'Ремонт шубы', visible: true },
        { name: 'Ирина С.', text: 'Покрасили норковую шубу — как новая! Цвет ровный, мех мягкий. Мастера знают своё дело.', rating: 5, service: 'Окрашивание', visible: true },
        { name: 'Марина Д.', text: 'Заказывала пошив шубы из норки. Три примерки, всё подогнали идеально. Качество на высоте!', rating: 5, service: 'Пошив шубы', visible: true },
      ]
      for (const r of reviewsData) {
        await payload.create({ collection: 'reviews', data: r, overrideAccess: true })
      }
      log.push(`✓ Отзывов: ${reviewsData.length}`)
    } else {
      log.push('→ Отзывы уже есть')
    }

    // ========== ПОРТФОЛИО ==========
    const existingPortfolio = await payload.find({ collection: 'portfolio', limit: 1 })
    if (existingPortfolio.totalDocs === 0) {
      const portfolioData = [
        { title: 'Реставрация норковой шубы', description: 'Полная реставрация классической норковой шубы: замена подкладки, ремонт бортов, обновление фурнитуры.', category: 'Ремонт шуб' as const, sortOrder: 1 },
        { title: 'Окрашивание в тёмный оттенок', description: 'Профессиональное окрашивание светлой норковой шубы в насыщенный тёмно-коричневый цвет.', category: 'Окрашивание' as const, sortOrder: 2 },
        { title: 'Перекрой в жилет', description: 'Перекрой длинной норковой шубы в стильный меховой жилет. Полное изменение фасона.', category: 'Перекрой' as const, sortOrder: 3 },
      ]
      for (const p of portfolioData) {
        await payload.create({ collection: 'portfolio', data: p, overrideAccess: true })
      }
      log.push(`✓ Портфолио: ${portfolioData.length}`)
    } else {
      log.push('→ Портфолио уже есть')
    }

    // ========== ТОВАРЫ (39 штук из src/data/products.ts) ==========
    const existingProducts = await payload.find({ collection: 'products', limit: 1 })
    if (existingProducts.totalDocs === 0) {
      let count = 0
      for (const p of products) {
        try {
          await payload.create({
            collection: 'products',
            data: {
              title: p.title,
              slug: p.slug,
              description: p.description,
              category: p.category,
              subcategory: p.subcategory || undefined,
              price: p.price,
              imagePaths: p.images.map((src) => ({ path: src })),
              details: p.details?.map((d) => {
                const [label, ...rest] = d.split(': ')
                return { label, value: rest.join(': ') || label }
              }) || [],
            },
            overrideAccess: true,
          })
          count++
        } catch (e: any) {
          log.push(`✗ ${p.title}: ${e.message}`)
        }
      }
      log.push(`✓ Товаров: ${count}`)
    } else {
      log.push('→ Товары уже есть')
    }

    return NextResponse.json({ success: true, log })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message, stack: error.stack?.split('\n').slice(0, 5) }, { status: 500 })
  }
}
