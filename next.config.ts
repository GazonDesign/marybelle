import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // === КРИТИЧЕСКИЕ (сохраняем SEO-позиции) ===
      { source: '/remont-shub', destination: '/uslugi/remont-shub', permanent: true },
      { source: '/remont-shub/', destination: '/uslugi/remont-shub', permanent: true },
      { source: '/mexovoj-xolodilnik', destination: '/uslugi/mehovoj-holodilnik', permanent: true },
      { source: '/mexovoj-xolodilnik/', destination: '/uslugi/mehovoj-holodilnik', permanent: true },

      // === ВЫСОКИЕ ===
      { source: '/remont-palto', destination: '/uslugi/remont-palto', permanent: true },
      { source: '/remont-palto/', destination: '/uslugi/remont-palto', permanent: true },
      { source: '/individualnyj-poshiv-2', destination: '/uslugi/poshiv-shub', permanent: true },
      { source: '/individualnyj-poshiv-2/', destination: '/uslugi/poshiv-shub', permanent: true },
      { source: '/okrashivanie-classic', destination: '/uslugi/okrashivanie', permanent: true },
      { source: '/okrashivanie-classic/', destination: '/uslugi/okrashivanie', permanent: true },
      { source: '/remont-okras-izdelij-iz-kozhi-i-dublenok', destination: '/uslugi/remont-kozhi', permanent: true },
      { source: '/remont-okras-izdelij-iz-kozhi-i-dublenok/', destination: '/uslugi/remont-kozhi', permanent: true },
      { source: '/ximchistka', destination: '/uslugi/himchistka', permanent: true },
      { source: '/ximchistka/', destination: '/uslugi/himchistka', permanent: true },
      { source: '/perekroj', destination: '/uslugi/perekroj', permanent: true },
      { source: '/perekroj/', destination: '/uslugi/perekroj', permanent: true },
      // Трейд-ин жил на пагинации — перенаправляем
      { source: '/shubi/page/2', destination: '/trejd-in', permanent: true },
      { source: '/shubi/page/2/', destination: '/trejd-in', permanent: true },

      // === СРЕДНИЕ ===
      { source: '/remont-shub-vojkovskaya', destination: '/uslugi/remont-shub-vojkovskaya', permanent: true },
      { source: '/remont-shub-vojkovskaya/', destination: '/uslugi/remont-shub-vojkovskaya', permanent: true },
      { source: '/remont-brendovoj-odezhdy', destination: '/uslugi/remont-brendovoj-odezhdy', permanent: true },
      { source: '/remont-brendovoj-odezhdy/', destination: '/uslugi/remont-brendovoj-odezhdy', permanent: true },
      { source: '/individualnyj-zakaz', destination: '/uslugi/poshiv-shub', permanent: true },
      { source: '/individualnyj-zakaz/', destination: '/uslugi/poshiv-shub', permanent: true },

      // === МАГАЗИН ===
      { source: '/shubi', destination: '/magazin', permanent: true },
      { source: '/shubi/', destination: '/magazin', permanent: true },
      { source: '/shubi/shuby-iz-norki', destination: '/magazin/shuby/norka', permanent: true },
      { source: '/shubi/shuby-iz-norki/', destination: '/magazin/shuby/norka', permanent: true },
      { source: '/shubi/shuby-iz-karakulya', destination: '/magazin/shuby/karakul', permanent: true },
      { source: '/shubi/shuby-iz-karakulya/', destination: '/magazin/shuby/karakul', permanent: true },
      { source: '/shubi/shuby-iz-sobolya', destination: '/magazin/shuby/sobol', permanent: true },
      { source: '/shubi/shuby-iz-sobolya/', destination: '/magazin/shuby/sobol', permanent: true },
      { source: '/shubi/palto-iz-shersti-i-ekomeha', destination: '/magazin/palto', permanent: true },
      { source: '/shubi/palto-iz-shersti-i-ekomeha/', destination: '/magazin/palto', permanent: true },
      { source: '/shubi/bolshie-razmery', destination: '/magazin/bolshie-razmery', permanent: true },
      { source: '/shubi/bolshie-razmery/', destination: '/magazin/bolshie-razmery', permanent: true },
      { source: '/shubi/izdeliya-iz-kozhi', destination: '/magazin/kozha', permanent: true },
      { source: '/shubi/izdeliya-iz-kozhi/', destination: '/magazin/kozha', permanent: true },

      // === КОНТЕНТ И ИНФО ===
      { source: '/kontakti', destination: '/kontakty', permanent: true },
      { source: '/kontakti/', destination: '/kontakty', permanent: true },
      { source: '/kakoj-meh-samyj-teplyj', destination: '/blog/kakoj-meh-samyj-teplyj', permanent: true },
      { source: '/kakoj-meh-samyj-teplyj/', destination: '/blog/kakoj-meh-samyj-teplyj', permanent: true },
    ]
  },
}

export default nextConfig
