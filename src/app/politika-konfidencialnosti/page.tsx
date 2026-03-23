import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Политика конфиденциальности — Mary Belle',
  description: 'Политика конфиденциальности и обработки персональных данных сайта mary-belle.ru.',
}

export default function PolitikaPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[70px]" />

        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[800px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Политика конфиденциальности</span>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <h1 className="font-serif text-3xl md:text-4xl text-black mb-10">Политика конфиденциальности</h1>

            <div className="space-y-6 text-text-body leading-relaxed text-sm">
              <h2 className="font-serif text-xl text-black mt-6">1. Общие положения</h2>
              <p>
                Настоящая политика конфиденциальности определяет порядок обработки и защиты
                персональных данных пользователей сайта mary-belle.ru (далее — Сайт),
                принадлежащего меховому ателье Mary Belle (далее — Оператор).
              </p>
              <p>
                Используя Сайт и предоставляя свои персональные данные, пользователь выражает
                согласие с условиями настоящей Политики.
              </p>

              <h2 className="font-serif text-xl text-black mt-6">2. Какие данные мы собираем</h2>
              <p>Оператор может собирать следующие данные:</p>
              <ul className="list-disc pl-6 space-y-1 text-text-muted">
                <li>Имя</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты</li>
                <li>Данные, автоматически передаваемые при посещении сайта (IP-адрес, cookies, данные браузера)</li>
              </ul>

              <h2 className="font-serif text-xl text-black mt-6">3. Цели обработки данных</h2>
              <ul className="list-disc pl-6 space-y-1 text-text-muted">
                <li>Обработка заявок и обращений пользователей</li>
                <li>Связь с пользователем по телефону или email</li>
                <li>Улучшение качества обслуживания</li>
                <li>Анализ посещаемости сайта (Яндекс.Метрика)</li>
              </ul>

              <h2 className="font-serif text-xl text-black mt-6">4. Защита данных</h2>
              <p>
                Оператор принимает необходимые организационные и технические меры для защиты
                персональных данных от неправомерного доступа, уничтожения, изменения, блокирования,
                копирования и распространения.
              </p>

              <h2 className="font-serif text-xl text-black mt-6">5. Передача данных третьим лицам</h2>
              <p>
                Оператор не передаёт персональные данные третьим лицам, за исключением случаев,
                предусмотренных законодательством Российской Федерации.
              </p>

              <h2 className="font-serif text-xl text-black mt-6">6. Использование cookies</h2>
              <p>
                Сайт использует cookies и счётчики Яндекс.Метрики для анализа посещаемости.
                Пользователь может отключить cookies в настройках браузера.
              </p>

              <h2 className="font-serif text-xl text-black mt-6">7. Права пользователя</h2>
              <p>
                Пользователь имеет право запросить информацию об обработке своих персональных данных,
                потребовать их изменения или удаления, обратившись по адресу: info@mary-belle.ru
                или по телефону +7 (495) 225-44-44.
              </p>

              <h2 className="font-serif text-xl text-black mt-6">8. Контактная информация</h2>
              <p>
                Меховое ателье Mary Belle<br />
                Москва, 1-й Новоподмосковный пер., д. 2/1<br />
                Телефон: +7 (495) 225-44-44<br />
                Email: info@mary-belle.ru
              </p>

              <p className="text-text-muted mt-8">
                Дата последнего обновления: 22 марта 2026 г.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
