import json
import urllib.request

BASE = "http://localhost:3000/api"

def api(endpoint, data=None, method="GET", token=None):
    url = f"{BASE}/{endpoint}"
    headers = {"Content-Type": "application/json"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    body = json.dumps(data).encode("utf-8") if data else None
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"  ERROR: {e}")
        return {}

# Login
token = api("users/login", {"email": "ivan@marybelle.ru", "password": "MaryBelle2026!"}, "POST")["token"]
print(f"Token: {token[:20]}...\n")

# ========== УСЛУГИ ==========
services = [
    {"title": "Ремонт шуб", "slug": "remont-shub", "description": "Реставрация норковых, соболиных и каракулевых шуб любой сложности — замена подкладки, ремонт швов, перекрой.", "icon": "/icons/services/repair.svg", "image": "/images/uslugi-remont-mehov.jpg", "sortOrder": 1},
    {"title": "Ремонт кожи и дублёнок", "slug": "remont-kozhi", "description": "Восстановление кожаных курток, дублёнок и аксессуаров. Окрашивание, замена фурнитуры, реставрация.", "icon": "/icons/services/leather.svg", "image": "/images/uslugi-remont-kozhi.jpg", "sortOrder": 2},
    {"title": "Индивидуальный пошив", "slug": "poshiv-shub", "description": "Пошив шуб и пальто на заказ из норки, соболя, каракуля. Три примерки, авторский крой.", "icon": "/icons/services/sewing.svg", "image": "/images/uslugi-poshiv.jpg", "sortOrder": 3},
    {"title": "Меховой холодильник", "slug": "mehovoj-holodilnik", "description": "Хранение шуб при +5°C и влажности 50–60%. Защита от моли, страховка, курьер по Москве.", "icon": "/icons/services/storage.svg", "image": "/images/uslugi-holodilnik.jpg", "sortOrder": 4},
    {"title": "Окрашивание меха", "slug": "okrashivanie", "description": "Покраска шубы из норки и других мехов. Полное окрашивание, тонирование, эффект омбре.", "icon": "/icons/services/coloring.svg", "image": "/images/uslugi-okrashivanie.jpg", "sortOrder": 5},
    {"title": "Химчистка", "slug": "himchistka", "description": "Профессиональная чистка меховых и кожаных изделий. Удаление загрязнений, антимольная обработка.", "icon": "/icons/services/cleaning.svg", "image": "/images/uslugi-himchistka.jpg", "sortOrder": 6},
    {"title": "Перекрой шубы", "slug": "perekroj", "description": "Новый фасон из старой шубы — перешив, укорачивание, модернизация. Полный и частичный перекрой.", "icon": "/icons/services/repair.svg", "image": "/images/uslugi-perekroj.jpg", "sortOrder": 7},
    {"title": "Ремонт пальто", "slug": "remont-palto", "description": "Реставрация шерстяных, кашемировых и драповых пальто. Замена подкладки, ремонт швов.", "icon": "/icons/services/sewing.svg", "image": "/images/product-palto.jpg", "sortOrder": 8},
    {"title": "Ремонт брендовой одежды", "slug": "remont-brendovoj-odezhdy", "description": "Moncler, Max Mara, Burberry — работаем с люксовыми брендами. Оригинальная фурнитура.", "icon": "/icons/services/leather.svg", "image": "/images/uslugi-brendovaya.jpg", "sortOrder": 9},
]

print("=== Услуги ===")
for s in services:
    r = api("services", s, "POST", token)
    title = r.get("doc", {}).get("title", "?")
    print(f"  + {title}")

# ========== ПОРТФОЛИО ==========
portfolio = [
    {"title": "Реставрация норковой шубы", "slug": "restavratsiya-norkovoj-shuby", "description": "Полная реставрация классической норковой шубы: замена подкладки, ремонт бортов, обновление фурнитуры.", "category": "remont", "sortOrder": 1},
    {"title": "Окрашивание в тёмный оттенок", "slug": "okrashivanie-v-temnyj-ottenok", "description": "Профессиональное окрашивание светлой норковой шубы в насыщенный тёмно-коричневый цвет.", "category": "okrashivanie", "sortOrder": 2},
    {"title": "Перекрой в жилет", "slug": "perekroj-v-zhilet", "description": "Перекрой длинной норковой шубы в стильный меховой жилет. Полное изменение фасона.", "category": "perekroj", "sortOrder": 3},
]

print("\n=== Портфолио ===")
for p in portfolio:
    r = api("portfolio", p, "POST", token)
    title = r.get("doc", {}).get("title", "?")
    print(f"  + {title}")

# ========== ПРОВЕРКА ==========
print("\n=== Итого в CMS ===")
for col in ["services", "prices", "reviews", "portfolio"]:
    r = api(col, token=token)
    print(f"  {col}: {r.get('totalDocs', '?')}")
