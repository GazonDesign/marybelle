# Deploy — Mary Belle

## Структура

```
deploy/
├── .env                   ← Секреты (НЕ в git!)
├── .env.example           ← Шаблон секретов (в git)
├── deploy.sh              ← Главный скрипт деплоя на VPS
├── test.sh                ← Предеплой тесты (линт, сборка, smoke)
├── ecosystem.config.js    ← PM2 конфиг (сайт + Strapi)
├── nginx/
│   ├── mary-belle.conf    ← Nginx для mary-belle.ru
│   └── strapi.conf        ← Nginx для cms.mary-belle.ru
└── README.md              ← Этот файл

.github/workflows/
└── ci.yml                 ← GitHub Actions: автотесты + деплой
```

## Быстрый старт

### 1. Настрой секреты

```bash
# Скопируй шаблон и заполни реальными значениями
cp deploy/.env.example deploy/.env
```

Все секреты хранятся в одном файле `deploy/.env`. Скрипт деплоя автоматически:
- Загружает секреты из `deploy/.env`
- Генерирует `.env.local` на VPS при каждом деплое
- Никогда не коммитит секреты в git

### 2. Ручной деплой

```bash
# Первичная настройка VPS (один раз)
./deploy/deploy.sh setup

# Деплой сайта
./deploy/deploy.sh site

# Деплой только CMS
./deploy/deploy.sh cms

# Деплой всего
./deploy/deploy.sh all

# Проверка состояния VPS
./deploy/deploy.sh health
```

### Тесты перед деплоем

```bash
# Все тесты
./deploy/test.sh

# Только сборка
./deploy/test.sh build

# Только линт
./deploy/test.sh lint

# Smoke-тесты (нужен запущенный сервер)
./deploy/test.sh smoke
```

## GitHub Actions (автоматический деплой)

Пайплайн запускается при push/PR в `main`:

1. **Lint** — ESLint + TypeScript
2. **Build** — сборка Next.js
3. **Smoke** — проверка ключевых страниц
4. **Deploy** — деплой на VPS (только при push в main)

### Необходимые GitHub Secrets

Добавить в Settings → Secrets → Actions (все значения из `deploy/.env`):

| Secret | Описание |
|--------|----------|
| `VPS_HOST` | IP VPS-сервера |
| `VPS_PORT` | SSH-порт |
| `VPS_USER` | SSH-пользователь |
| `VPS_SSH_KEY` | Приватный SSH-ключ (ed25519) |
| `STRAPI_URL` | URL Strapi CMS |
| `STRAPI_TOKEN` | API-токен Strapi |
| `AMO_SUBDOMAIN` | Субдомен AmoCRM |
| `AMO_TOKEN` | Токен AmoCRM |
| `AMO_WEBHOOK_SECRET` | Секрет вебхука AmoCRM |
| `MB_TG_BOT_TOKEN` | Telegram бот-токен (прямой Bot API) |
| `MB_TG_CHAT_ID` | ID Telegram-чата |
| `EMAIL_TO` | Email для уведомлений |
| `SMTP_USER` | SMTP логин |
| `SMTP_PASS` | SMTP пароль |
| `METRIKA_OAUTH_TOKEN` | OAuth-токен Метрики (счётчик 29448140) |
| `PAYLOAD_SECRET` | Секрет Payload CMS |

## Nginx

Скопировать конфиги на VPS:

```bash
scp -i ~/.ssh/id_ed25519 -P 49295 deploy/nginx/*.conf root@195.161.41.117:/etc/nginx/conf.d/
ssh -i ~/.ssh/id_ed25519 -p 49295 root@195.161.41.117 "nginx -t && systemctl reload nginx"
```

## PM2

```bash
# Запуск обоих сервисов
pm2 start deploy/ecosystem.config.js

# Статус
pm2 list

# Логи
pm2 logs

# Автозапуск при перезагрузке VPS
pm2 save
pm2 startup
```
