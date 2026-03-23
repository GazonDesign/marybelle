export interface Product {
  slug: string
  title: string
  description: string
  category: 'shuby' | 'palto' | 'kozha'
  subcategory?: string // norka, karakul, sobol
  images: string[]
  price: string
  details?: string[]
}

// Helper: generate image paths from folder
function imgs(folder: string, count: number, ext = 'jpg'): string[] {
  return Array.from({ length: count }, (_, i) =>
    `${folder}/${String(i + 1).padStart(2, '0')}.${ext}`
  )
}

export const products: Product[] = [
  // === ШУБЫ ИЗ НОРКИ ===
  {
    slug: 'odeyalo-pudra',
    title: '«Одеяло» Пудра',
    description: 'Шуба-одеяло из соболя пудрового оттенка. Свободный крой оверсайз, мягкий и уютный силуэт.',
    category: 'shuby',
    subcategory: 'sobol',
    images: imgs('/images/magazin/shuby/odeyalo-pudra', 3),
    price: 'Цена по запросу',
    details: ['Мех: соболь', 'Цвет: пудра', 'Крой: оверсайз', 'Длина: до колена'],
  },
  {
    slug: 'kimono-bluejeans',
    title: '«Кимоно» БлюДжинс',
    description: 'Шуба-кимоно из норки в оттенке Blue Jeans. Нестандартный крой, лёгкость и свобода движений.',
    category: 'shuby',
    subcategory: 'norka',
    images: imgs('/images/magazin/shuby/kimono-bluejeans', 4),
    price: 'Цена по запросу',
    details: ['Мех: норка', 'Цвет: Blue Jeans', 'Крой: кимоно', 'Длина: миди'],
  },
  {
    slug: 'zhanna-norka',
    title: '«Жанна»',
    description: 'Элегантная норковая шуба с капюшоном. Тёмный соболиный оттенок, прямой удлинённый силуэт.',
    category: 'shuby',
    subcategory: 'norka',
    images: imgs('/images/magazin/shuby/zhanna-norka', 6),
    price: 'Цена по запросу',
    details: ['Мех: норка', 'Цвет: тёмный соболиный', 'Капюшон: да', 'Длина: ниже колена'],
  },
  {
    slug: 'rayusha-norka-black',
    title: '«Раюша» Норка Блэк',
    description: 'Норковая шуба глубокого чёрного цвета. Объёмный силуэт, роскошный мех.',
    category: 'shuby',
    subcategory: 'norka',
    images: imgs('/images/magazin/shuby/rayusha-norka-black', 7),
    price: 'Цена по запросу',
    details: ['Мех: норка', 'Цвет: чёрный', 'Крой: объёмный', 'Длина: до колена'],
  },
  {
    slug: 'dunyasha-scanblack',
    title: '«Дуняша» ScanBlack',
    description: 'Шуба из скандинавской норки. Глубокий чёрный цвет, поперечная раскладка меха, приталенный силуэт.',
    category: 'shuby',
    subcategory: 'norka',
    images: imgs('/images/magazin/shuby/dunyasha-scanblack', 8),
    price: 'Цена по запросу',
    details: ['Мех: скандинавская норка', 'Цвет: ScanBlack', 'Раскладка: поперечная', 'Длина: до колена'],
  },
  {
    slug: 'kozlik-norka-kashmir',
    title: '«Козлик-Норка-Кашемир»',
    description: 'Комбинированная шуба: козлик, норка и кашемир. Оригинальный авторский дизайн.',
    category: 'shuby',
    subcategory: 'karakul',
    images: imgs('/images/magazin/shuby/kozlik-norka-kashmir', 4),
    price: 'Цена по запросу',
    details: ['Мех: козлик + норка', 'Ткань: кашемир', 'Дизайн: авторский', 'Длина: миди'],
  },
  {
    slug: 'norka-classic',
    title: 'Норка классическая',
    description: 'Классическая модель из норки. Прямой крой, минималистичный дизайн, глубокий тёмный мех.',
    category: 'shuby',
    subcategory: 'norka',
    images: imgs('/images/magazin/shuby/norka-classic', 6),
    price: 'Цена по запросу',
    details: ['Мех: норка', 'Цвет: тёмный', 'Крой: прямой', 'Длина: до колена'],
  },

  // === ШУБЫ ИЗ КАРАКУЛЯ ===
  {
    slug: 'afgan-karakul',
    title: '«Афган» Каракуль Джулия',
    description: 'Каракулевая шуба в стиле Афган. Тонкий завиток свакара, контрастная отделка, приталенный силуэт.',
    category: 'shuby',
    subcategory: 'karakul',
    images: imgs('/images/magazin/shuby/afgan-karakul', 7),
    price: 'Цена по запросу',
    details: ['Мех: каракуль свакара', 'Стиль: Афган', 'Отделка: контрастная', 'Длина: до середины бедра'],
  },

  // === ПАЛЬТО ===
  {
    slug: 'palto-1',
    title: 'Пальто «Элегия»',
    description: 'Длинное пальто из тёмной шерсти. Прямой силуэт с поясом. Лаконичный и строгий стиль.',
    category: 'palto',
    images: imgs('/images/magazin/palto/palto-1', 10),
    price: 'Цена по запросу',
    details: ['Материал: шерсть', 'Цвет: тёмно-серый', 'Пояс: да', 'Длина: макси'],
  },
  {
    slug: 'palto-2',
    title: 'Пальто «Аврора»',
    description: 'Классическое пальто из плотной шерсти. Приталенный крой, женственный силуэт.',
    category: 'palto',
    images: imgs('/images/magazin/palto/palto-2', 10),
    price: 'Цена по запросу',
    details: ['Материал: шерсть', 'Крой: приталенный', 'Длина: миди'],
  },
  {
    slug: 'palto-3',
    title: 'Пальто «Софья»',
    description: 'Элегантное пальто миди из мягкой шерсти. Женственные линии, лёгкий акцент на талии.',
    category: 'palto',
    images: imgs('/images/magazin/palto/palto-3', 8),
    price: 'Цена по запросу',
    details: ['Материал: мягкая шерсть', 'Крой: полуприлегающий', 'Длина: миди'],
  },
  {
    slug: 'palto-4',
    title: 'Пальто «Нева»',
    description: 'Удлинённое пальто свободного кроя. Минимализм, комфорт и элегантность.',
    category: 'palto',
    images: imgs('/images/magazin/palto/palto-4', 10),
    price: 'Цена по запросу',
    details: ['Материал: шерсть', 'Крой: свободный', 'Длина: макси'],
  },
  {
    slug: 'palto-5',
    title: 'Пальто «Мария»',
    description: 'Двубортное пальто из итальянской шерсти. Чёткие линии, структурированные плечи.',
    category: 'palto',
    images: imgs('/images/magazin/palto/palto-5', 10),
    price: 'Цена по запросу',
    details: ['Материал: итальянская шерсть', 'Крой: двубортный', 'Длина: миди'],
  },
  {
    slug: 'palto-6',
    title: 'Пальто «Вера»',
    description: 'Лаконичное пальто прямого кроя. Универсальная модель на каждый день.',
    category: 'palto',
    images: imgs('/images/magazin/palto/palto-6', 8),
    price: 'Цена по запросу',
    details: ['Материал: шерсть', 'Крой: прямой', 'Длина: миди'],
  },
  {
    slug: 'palto-7',
    title: 'Пальто «Ольга»',
    description: 'Пальто-халат с запахом. Мягкие линии, свободный силуэт, объёмный пояс.',
    category: 'palto',
    images: imgs('/images/magazin/palto/palto-7', 10),
    price: 'Цена по запросу',
    details: ['Материал: шерсть', 'Крой: халат с запахом', 'Длина: макси'],
  },
  {
    slug: 'palto-8',
    title: 'Пальто «Анна»',
    description: 'Структурированное пальто с чёткими плечами. Минималистичный дизайн.',
    category: 'palto',
    images: imgs('/images/magazin/palto/palto-8', 10),
    price: 'Цена по запросу',
    details: ['Материал: шерсть', 'Крой: структурированный', 'Длина: миди'],
  },
  {
    slug: 'palto-9',
    title: 'Пальто «Лиза»',
    description: 'Укороченное пальто из буклированной шерсти. Молодёжный повседневный стиль.',
    category: 'palto',
    images: imgs('/images/magazin/palto/palto-9', 10),
    price: 'Цена по запросу',
    details: ['Материал: буклированная шерсть', 'Крой: свободный', 'Длина: укороченное'],
  },

  // === КОЖА ===
  {
    slug: 'bomber-aviator',
    title: 'Бомбер-авиатор',
    description: 'Куртка-пилот из натуральной кожи. Классический авиаторский стиль с меховым воротником.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/bomber-aviator', 3),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: авиатор', 'Воротник: мех'],
  },
  {
    slug: 'biker-kosukha',
    title: 'Косуха Biker',
    description: 'Мотоциклетная куртка из плотной кожи. Вечная классика — косуха.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/biker-kosukha', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: байкер / косуха'],
  },
  {
    slug: 'modern-biker-grunge',
    title: 'Байкер Grunge',
    description: 'Современная интерпретация байкерской куртки в стиле гранж.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/modern-biker-grunge', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: гранж'],
  },
  {
    slug: 'urban-minimalist-biker',
    title: 'Urban Minimalist',
    description: 'Минималистичная кожаная куртка для городского стиля.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/urban-minimalist-biker', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: минимализм'],
  },
  {
    slug: 'urban-edge-biker',
    title: 'Urban Edge',
    description: 'Кожаная куртка с характером. Дерзкий городской стиль.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/urban-edge-biker', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: urban edge'],
  },
  {
    slug: 'bold-statement-moto',
    title: 'Statement Moto',
    description: 'Кожаная куртка-заявление. Яркий и смелый мотоциклетный дизайн.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/bold-statement-moto', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: statement'],
  },
  {
    slug: 'suede-moto-1',
    title: 'Замшевая мото',
    description: 'Куртка из мягкой замши. Тёплая и уютная, с мотоциклетным кроем.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/suede-moto-1', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная замша', 'Стиль: мото'],
  },
  {
    slug: 'urban-bomber',
    title: 'Бомбер Urban',
    description: 'Городской бомбер из натуральной кожи. Лаконичный и современный.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/urban-bomber', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: urban bomber'],
  },
  {
    slug: 'luxury-biker-chic',
    title: 'Luxury Biker Chic',
    description: 'Премиальная кожаная куртка. Роскошная выделка и безупречный крой.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/luxury-biker-chic', 2),
    price: 'Цена по запросу',
    details: ['Материал: премиальная кожа', 'Стиль: luxury biker'],
  },
  {
    slug: 'leather-blazer',
    title: 'Кожаный блейзер',
    description: 'Жакет из натуральной кожи. Power-suit стиль для деловых встреч и вечеров.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/leather-blazer', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: блейзер / power suit'],
  },
  {
    slug: 'leather-midi-skirt',
    title: 'Кожаная юбка миди',
    description: 'Архитектурная юбка из натуральной кожи. Современный минимализм и чёткие линии.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/leather-midi-skirt', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: минимализм', 'Длина: миди'],
  },
  {
    slug: 'suede-blazer',
    title: 'Замшевый блейзер',
    description: 'Блейзер-рубашка из натуральной замши. Мягкий и универсальный.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/suede-blazer', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная замша', 'Стиль: overshirt / блейзер'],
  },
  {
    slug: 'distressed-grunge-biker',
    title: 'Distressed Grunge',
    description: 'Кожаная куртка с эффектом состаренности. Грандж-стиль.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/distressed-grunge-biker', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: distressed / grunge'],
  },
  {
    slug: 'minimalist-chic-biker',
    title: 'Minimalist Chic',
    description: 'Минималистичная кожаная куртка. Чистые линии, лаконичный крой.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/minimalist-chic-biker', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: минимализм'],
  },
  {
    slug: 'modern-chic-biker',
    title: 'Modern Chic Biker',
    description: 'Современная байкерская куртка с элегантным кроем. Городской шик.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/modern-chic-biker', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: modern chic'],
  },
  {
    slug: 'suede-moto-2',
    title: 'Замшевая мото II',
    description: 'Замшевая куртка в мотоциклетном стиле. Мягкая текстура, тёплые тона.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/suede-moto-2', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная замша', 'Стиль: мото'],
  },
  {
    slug: 'urban-chic-biker',
    title: 'Urban Chic Biker',
    description: 'Кожаная куртка для городского стиля. Элегантность и характер.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/urban-chic-biker', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: urban chic'],
  },
  {
    slug: 'urban-chic-moto-1',
    title: 'Urban Chic Moto',
    description: 'Мотоциклетная куртка в городском стиле. Утончённый крой, мягкая кожа.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/urban-chic-moto-1', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: urban moto'],
  },
  {
    slug: 'urban-chic-moto-2',
    title: 'Urban Chic Moto II',
    description: 'Вторая модель в линейке Urban Chic. Акцентные детали, выверенный силуэт.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/urban-chic-moto-2', 4),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: urban moto'],
  },
  {
    slug: 'urban-edge-moto',
    title: 'Urban Edge Moto',
    description: 'Кожаная куртка с дерзким характером. Контрастные детали, острый силуэт.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/urban-edge-moto', 2),
    price: 'Цена по запросу',
    details: ['Материал: натуральная кожа', 'Стиль: urban edge'],
  },
  {
    slug: 'urban-luxury-biker',
    title: 'Urban Luxury Biker',
    description: 'Премиальная байкерская куртка. Люксовая кожа, безупречная посадка.',
    category: 'kozha',
    images: imgs('/images/magazin/kozha/urban-luxury-biker', 2),
    price: 'Цена по запросу',
    details: ['Материал: премиальная кожа', 'Стиль: luxury biker'],
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string, subcategory?: string): Product[] {
  return products.filter((p) => {
    if (p.category !== category) return false
    if (subcategory && p.subcategory !== subcategory) return false
    return true
  })
}
