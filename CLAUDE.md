# Mary Belle — правила проекта

## КРИТИЧНО: Vercel env vars

Любое изменение в `process.env.*` или добавление нового env var — **обязательно проверь и добавь на Vercel**.
Команда: `npx vercel env ls` — должен показать все переменные из списка ниже.

### Обязательные env vars на Vercel (production)

| Переменная | Назначение | Где используется |
|---|---|---|
| `MB_TG_BOT_TOKEN` | Telegram бот-токен (прямой Bot API) | `api/lead/route.ts` |
| `MB_TG_CHAT_ID` | Telegram chat ID (815792082) | `api/lead/route.ts` |
| `AMO_SUBDOMAIN` | Субдомен AmoCRM (marybelleadvyd) | `api/lead/route.ts`, `api/amo-webhook/route.ts` |
| `AMO_TOKEN` | JWT-токен AmoCRM | `api/lead/route.ts`, `api/amo-webhook/route.ts` |
| `EMAIL_TO` | Email для уведомлений | `api/lead/route.ts` |
| `SMTP_USER` | Яндекс.Почта логин | `api/lead/route.ts` |
| `SMTP_PASS` | Яндекс.Почта пароль приложения | `api/lead/route.ts` |
| `PAYLOAD_SECRET` | Секрет Payload CMS | Payload internals |
| `METRIKA_OAUTH_TOKEN` | OAuth для офлайн-конверсий | `api/amo-webhook/route.ts` |

### Не нужны на Vercel (только локально)

- `STRAPI_URL`, `STRAPI_TOKEN` — Strapi только для локальной разработки, на проде статические fallback-данные
- `SEED_SECRET`, `SEED_ADMIN_*` — для первичного сидинга CMS
- `NEXT_PUBLIC_METRIKA_ID` — НЕ ИСПОЛЬЗУЕТСЯ в коде, удалён. Счётчик 29448140 захардкожен

### После добавления/изменения env vars

Vercel НЕ подхватывает новые env vars автоматически — нужен редеплой:
```bash
npx vercel deploy --prod
```

## Яндекс.Метрика

- Счётчик: **29448140** (генеральный домен mary-belle.ru)
- Захардкожен в 7 файлах (layout.tsx, utm.ts, amo-webhook, 4 формы)
- 106018856 — это ДРУГОЙ счётчик (рекламный сайт), не путать
- Скрипты подключены через `next/script` с `strategy="afterInteractive"` (НЕ через raw `<script>`)
- Цель `form_submit_success` отправляется из всех 5 форм

## Telegram

- Имена переменных: `MB_TG_BOT_TOKEN` / `MB_TG_CHAT_ID` (с префиксом MB_, специально)
- НЕ путать с `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` (старые имена, не используются)
- Отправка напрямую через Bot API (не через CF Worker)

## Формы и лиды

5 точек входа, все POST на `/api/lead`:
- ContactSection (source: "contact")
- FloatingCTA callback (source: "callback")
- CrossSellBanner (source: "callback")
- HeroBannerCarousel (source: "callback")
- TradeIn (source: "trade-in")

Каждая форма отправляет: name, phone, source, page, utm, yclid, clientId.
Лид уходит параллельно в: AmoCRM + Telegram + Email.

## AmoCRM

- НЕ ТРОГАТЬ интеграцию AmoCRM, не менять поля и pipeline
- Webhook `/api/amo-webhook` — офлайн-конверсии в Метрику при закрытии сделки
- UTM-поля привязаны к конкретным field_id (hardcoded в route.ts)

## Envybox

- Только десктоп (>=768px), только квиз-страницы
- Открытие через программный клик по `a.cbk-phone`, НЕ через CallbackKillerApi
- НЕ ставить на мобайл

## Стек

- Next.js 16 + React 19 + Turbopack
- Inline `<script>` в JSX НЕ работает надёжно в React 19 — всегда использовать `next/script`
- Домен: mary-belle.ru (каноничный, без www). Vercel редиректит на www как алиас
- GitHub: GazonDesign/marybelle, автодеплой на push в main

<!-- VERCEL BEST PRACTICES START -->
## Vercel best practices

- Treat Vercel Functions as stateless + ephemeral
- Store secrets in Vercel Env Variables; not in git or `NEXT_PUBLIC_*`
- Sync env + project settings with `vercel env pull` / `vercel pull`
- Set Function regions near your primary data source
<!-- VERCEL BEST PRACTICES END -->
