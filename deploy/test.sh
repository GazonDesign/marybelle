#!/bin/bash
# ============================================================
# test.sh — Предеплой тесты Mary Belle
# ============================================================
# Использование:
#   ./deploy/test.sh          — все тесты
#   ./deploy/test.sh build    — только сборка
#   ./deploy/test.sh lint     — только линт
#   ./deploy/test.sh smoke    — smoke-тесты (нужен запущенный dev/start)
# ============================================================

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

# ── Цвета ──────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PASS=0
FAIL=0
WARN=0

log()      { echo -e "${BLUE}[TEST]${NC} $1"; }
pass()     { echo -e "${GREEN}[ OK ]${NC} $1"; PASS=$((PASS+1)); }
fail_test(){ echo -e "${RED}[FAIL]${NC} $1"; FAIL=$((FAIL+1)); }
warn_test(){ echo -e "${YELLOW}[WARN]${NC} $1"; WARN=$((WARN+1)); }

# ── 0. Проверка версии Node.js ────────────────────────────
test_node_version() {
    log "Проверяю Node.js..."

    if [ -f ".nvmrc" ]; then
        EXPECTED=$(cat .nvmrc | tr -d '[:space:]')
        CURRENT=$(node -v | sed 's/v\([0-9]*\).*/\1/')
        if [ "$CURRENT" = "$EXPECTED" ]; then
            pass "Node.js v${CURRENT} совпадает с .nvmrc (v${EXPECTED})"
        else
            fail_test "Node.js v${CURRENT}, нужен v${EXPECTED} (см. .nvmrc)"
        fi
    else
        warn_test ".nvmrc не найден — версия Node.js не зафиксирована"
    fi

    # Проверяем package-lock.json
    if [ -f "package-lock.json" ]; then
        pass "package-lock.json существует"
    else
        fail_test "package-lock.json не найден — npm ci не сработает"
    fi
}

# ── 1. Проверка зависимостей ──────────────────────────────
test_deps() {
    log "Проверяю зависимости..."

    if [ ! -d "node_modules" ]; then
        fail_test "node_modules не найден — запусти npm install"
        return
    fi
    pass "node_modules существует"

    # Проверяем критичные пакеты
    for pkg in next react react-dom; do
        if [ -d "node_modules/$pkg" ]; then
            pass "$pkg установлен"
        else
            fail_test "$pkg НЕ установлен"
        fi
    done
}

# ── 2. TypeScript проверка ────────────────────────────────
test_typescript() {
    log "Проверяю TypeScript..."

    if npx tsc --noEmit 2>/dev/null; then
        pass "TypeScript: ошибок нет"
    else
        warn_test "TypeScript: есть ошибки типов (не блокирует деплой)"
    fi
}

# ── 3. Линт ───────────────────────────────────────────────
test_lint() {
    log "Запускаю линтер..."

    if npm run lint 2>/dev/null; then
        pass "ESLint: ошибок нет"
    else
        warn_test "ESLint: есть предупреждения"
    fi
}

# ── 4. Сборка ─────────────────────────────────────────────
test_build() {
    log "Запускаю сборку Next.js..."

    BUILD_START=$(date +%s)
    if npm run build; then
        BUILD_END=$(date +%s)
        BUILD_TIME=$((BUILD_END - BUILD_START))
        pass "Сборка успешна (${BUILD_TIME}с)"
    else
        fail_test "Сборка провалилась!"
        return 1
    fi

    # Проверяем что .next/BUILD_ID создан
    if [ -f ".next/BUILD_ID" ]; then
        pass "BUILD_ID: $(cat .next/BUILD_ID)"
    else
        fail_test ".next/BUILD_ID не найден"
    fi
}

# ── 5. Проверка критичных файлов ──────────────────────────
test_files() {
    log "Проверяю критичные файлы..."

    CRITICAL_FILES=(
        "src/app/(frontend)/page.tsx"
        "src/app/(frontend)/layout.tsx"
        "src/app/layout.tsx"
        "src/app/globals.css"
        "src/app/sitemap.ts"
        "next.config.ts"
        "package.json"
        "tsconfig.json"
    )

    for f in "${CRITICAL_FILES[@]}"; do
        if [ -f "$f" ]; then
            pass "Файл: $f"
        else
            fail_test "Файл НЕ найден: $f"
        fi
    done
}

# ── 6. Проверка .env ─────────────────────────────────────
test_env() {
    log "Проверяю переменные окружения..."

    # Проверяем deploy/.env (для деплоя)
    if [ -f "deploy/.env" ]; then
        pass "deploy/.env существует"

        DEPLOY_VARS=("VPS_HOST" "VPS_PORT" "STRAPI_URL" "STRAPI_TOKEN" "AMO_TOKEN" "MB_TG_BOT_TOKEN" "MB_TG_CHAT_ID")
        for var in "${DEPLOY_VARS[@]}"; do
            if grep -q "^${var}=" deploy/.env 2>/dev/null; then
                pass "deploy/.env: $var задан"
            else
                fail_test "deploy/.env: $var НЕ задан"
            fi
        done
    else
        warn_test "deploy/.env не найден — ручной деплой не сработает"
    fi

    # Проверяем что deploy/.env не попадёт в git
    if grep -q "deploy/.env" .gitignore 2>/dev/null; then
        pass "deploy/.env в .gitignore"
    else
        fail_test "deploy/.env НЕ в .gitignore — секреты могут утечь!"
    fi

    # Проверяем .env.local (для локальной разработки)
    if [ -f ".env.local" ]; then
        pass ".env.local существует (для локальной разработки)"
    else
        warn_test ".env.local не найден (нужен для npm run dev)"
    fi
}

# ── 7. Проверка размера бандла ────────────────────────────
test_bundle_size() {
    log "Проверяю размер бандла..."

    if [ -d ".next" ]; then
        NEXT_SIZE=$(du -sm .next 2>/dev/null | cut -f1)
        if [ "$NEXT_SIZE" -lt 500 ]; then
            pass "Размер .next: ${NEXT_SIZE}MB"
        else
            warn_test "Размер .next большой: ${NEXT_SIZE}MB (>500MB)"
        fi
    else
        warn_test ".next не найден (запусти сборку)"
    fi
}

# ── 8. Smoke-тесты (HTTP) ────────────────────────────────
test_smoke() {
    log "Smoke-тесты (HTTP)..."

    local BASE_URL="${SMOKE_URL:-http://localhost:3000}"

    # Проверяем что сервер доступен
    if ! curl -sf "$BASE_URL" > /dev/null 2>&1; then
        warn_test "Сервер недоступен на $BASE_URL — пропускаю smoke-тесты"
        return
    fi
    pass "Сервер отвечает на $BASE_URL"

    # Ключевые страницы
    PAGES=(
        "/"
        "/uslugi"
        "/magazin"
        "/ceny"
        "/kontakty"
        "/portfolio"
        "/blog"
        "/o-fabrike"
    )

    for page in "${PAGES[@]}"; do
        HTTP_CODE=$(curl -so /dev/null -w "%{http_code}" "$BASE_URL$page" 2>/dev/null || echo "000")
        if [ "$HTTP_CODE" = "200" ]; then
            pass "GET $page → $HTTP_CODE"
        elif [ "$HTTP_CODE" = "000" ]; then
            fail_test "GET $page → таймаут"
        else
            fail_test "GET $page → $HTTP_CODE"
        fi
    done

    # Проверяем API
    API_CODE=$(curl -so /dev/null -w "%{http_code}" "$BASE_URL/api/lead" -X POST -H "Content-Type: application/json" -d '{}' 2>/dev/null || echo "000")
    if [ "$API_CODE" != "000" ]; then
        pass "POST /api/lead → $API_CODE (API отвечает)"
    else
        warn_test "POST /api/lead → таймаут"
    fi

    # Проверяем что robots.txt отдаётся
    ROBOTS_CODE=$(curl -so /dev/null -w "%{http_code}" "$BASE_URL/robots.txt" 2>/dev/null || echo "000")
    if [ "$ROBOTS_CODE" = "200" ]; then
        pass "GET /robots.txt → 200"
    else
        warn_test "GET /robots.txt → $ROBOTS_CODE"
    fi

    # Проверяем sitemap.xml
    SITEMAP_CODE=$(curl -so /dev/null -w "%{http_code}" "$BASE_URL/sitemap.xml" 2>/dev/null || echo "000")
    if [ "$SITEMAP_CODE" = "200" ]; then
        pass "GET /sitemap.xml → 200"
    else
        warn_test "GET /sitemap.xml → $SITEMAP_CODE"
    fi
}

# ── Итоги ─────────────────────────────────────────────────
summary() {
    echo ""
    echo "════════════════════════════════════════"
    echo -e "  ${GREEN}Прошло: $PASS${NC}  ${RED}Упало: $FAIL${NC}  ${YELLOW}Предупреждений: $WARN${NC}"
    echo "════════════════════════════════════════"

    if [ "$FAIL" -gt 0 ]; then
        echo -e "${RED}ДЕПЛОЙ ЗАБЛОКИРОВАН — исправь ошибки выше${NC}"
        exit 1
    elif [ "$WARN" -gt 0 ]; then
        echo -e "${YELLOW}Деплой возможен, но есть предупреждения${NC}"
        exit 0
    else
        echo -e "${GREEN}Все тесты пройдены — можно деплоить!${NC}"
        exit 0
    fi
}

# ── Точка входа ───────────────────────────────────────────
ACTION="${1:-all}"

case "$ACTION" in
    build)
        test_deps
        test_build
        ;;
    lint)
        test_lint
        test_typescript
        ;;
    smoke)
        test_smoke
        ;;
    all)
        test_node_version
        test_deps
        test_files
        test_env
        test_lint
        test_typescript
        test_build
        test_bundle_size
        test_smoke
        ;;
    *)
        echo "Использование: $0 {all|build|lint|smoke}"
        exit 1
        ;;
esac

summary
