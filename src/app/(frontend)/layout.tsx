import '../globals.css'
import LuxuryShimmerProvider from '@/components/ui/LuxuryShimmerProvider'
import FloatingCTA from '@/components/ui/FloatingCTA'
import UtmCapture from '@/components/ui/UtmCapture'
import MarquizQuiz from '@/components/ui/MarquizQuiz'

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://mary-belle.ru/#organization',
            name: 'Mary Belle — Московская меховая фабрика',
            alternateName: 'Mary Belle',
            description: 'Семейная меховая фабрика с 1870 года. Пошив, ремонт, хранение и окрашивание шуб. Собственное производство, промышленное оборудование, мастера с опытом от 15 лет.',
            url: 'https://mary-belle.ru',
            telephone: ['+74952254444', '+79670555978'],
            email: 'info@mary-belle.ru',
            foundingDate: '1870',
            image: 'https://mary-belle.ru/images/og-default.jpg',
            logo: 'https://mary-belle.ru/images/logo-dark.svg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '1-й Новоподмосковный пер., д. 2/1',
              addressLocality: 'Москва',
              addressCountry: 'RU',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 55.818812,
              longitude: 37.498173,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '11:00',
                closes: '20:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '12:00',
                closes: '18:00',
              },
            ],
            priceRange: '₽₽₽',
            sameAs: ['https://wa.me/79670555978'],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Услуги мехового ателье',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ремонт шуб' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Хранение шуб в меховом холодильнике' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Индивидуальный пошив шуб' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Окрашивание меха' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Химчистка меховых изделий' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ремонт кожаных изделий и дублёнок' } },
              ],
            },
          }),
        }}
      />
      {/* Яндекс.Метрика */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return;}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
            ym(106018856,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
          `,
        }}
      />
      <noscript>
        <div>
          <img src="https://mc.yandex.ru/watch/106018856" style={{ position: 'absolute', left: '-9999px' }} alt="" />
        </div>
      </noscript>
      {/* VK Pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?173",t.onload=function(){VK.Retargeting.Init("VK-RTRG-1000039157"),VK.Retargeting.Hit()},document.head.appendChild(t)}();
          `,
        }}
      />
      <noscript>
        <div>
          <img src="https://vk.com/rtrg?p=VK-RTRG-1000039157" style={{ position: 'absolute', left: '-9999px' }} alt="" />
        </div>
      </noscript>
      <div className="min-h-screen bg-bg-white">
        <LuxuryShimmerProvider />
        <UtmCapture />
        <MarquizQuiz />
        {children}
        <FloatingCTA />
      </div>
    </>
  )
}
