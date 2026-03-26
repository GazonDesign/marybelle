#!/bin/bash
# Seed script for Mary Belle CMS via REST API
BASE="http://localhost:3000/api"

# Login
TOKEN=$(curl -s "$BASE/users/login" -X POST -H "Content-Type: application/json" \
  -d '{"email":"ivan@marybelle.ru","password":"MaryBelle2026!"}' | python3 -c "import sys,json; print(json.load(sys.stdin)['token'])")

echo "Token obtained: ${TOKEN:0:20}..."

post() {
  curl -s "$BASE/$1" -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $TOKEN" \
    -d "$2" > /dev/null 2>&1
  echo "  ✓ $3"
}

echo ""
echo "=== Загружаем услуги ==="
post "services" '{"title":"Ремонт шуб","slug":"remont-shub","description":"Реставрация норковых, соболиных и каракулевых шуб любой сложности — замена подкладки, ремонт швов, перекрой.","icon":"/icons/services/repair.svg","image":"/images/uslugi-remont-mehov.jpg","sortOrder":1}' "Ремонт шуб"
post "services" '{"title":"Ремонт кожи и дублёнок","slug":"remont-kozhi","description":"Восстановление кожаных курток, дублёнок и аксессуаров. Окрашивание, замена фурнитуры, реставрация.","icon":"/icons/services/leather.svg","image":"/images/uslugi-remont-kozhi.jpg","sortOrder":2}' "Ремонт кожи"
post "services" '{"title":"Индивидуальный пошив","slug":"poshiv-shub","description":"Пошив шуб и пальто на заказ из норки, соболя, каракуля. Три примерки, авторский крой.","icon":"/icons/services/sewing.svg","image":"/images/uslugi-poshiv.jpg","sortOrder":3}' "Пошив"
post "services" '{"title":"Меховой холодильник","slug":"mehovoj-holodilnik","description":"Хранение шуб при +5°C и влажности 50–60%. Защита от моли, страховка, курьер по Москве.","icon":"/icons/services/storage.svg","image":"/images/uslugi-holodilnik.jpg","sortOrder":4}' "Холодильник"
post "services" '{"title":"Окрашивание меха","slug":"okrashivanie","description":"Покраска шубы из норки и других мехов. Полное окрашивание, тонирование, эффект омбре.","icon":"/icons/services/coloring.svg","image":"/images/uslugi-okrashivanie.jpg","sortOrder":5}' "Окрашивание"
post "services" '{"title":"Химчистка","slug":"himchistka","description":"Профессиональная чистка меховых и кожаных изделий. Удаление загрязнений, антимольная обработка.","icon":"/icons/services/cleaning.svg","image":"/images/uslugi-himchistka.jpg","sortOrder":6}' "Химчистка"
post "services" '{"title":"Перекрой шубы","slug":"perekroj","description":"Новый фасон из старой шубы — перешив, укорачивание, модернизация. Полный и частичный перекрой.","icon":"/icons/services/repair.svg","image":"/images/uslugi-perekroj.jpg","sortOrder":7}' "Перекрой"
post "services" '{"title":"Ремонт пальто","slug":"remont-palto","description":"Реставрация шерстяных, кашемировых и драповых пальто. Замена подкладки, ремонт швов.","icon":"/icons/services/sewing.svg","image":"/images/product-palto.jpg","sortOrder":8}' "Ремонт пальто"
post "services" '{"title":"Ремонт брендовой одежды","slug":"remont-brendovoj-odezhdy","description":"Moncler, Max Mara, Burberry — работаем с люксовыми брендами. Оригинальная фурнитура.","icon":"/icons/services/leather.svg","image":"/images/uslugi-brendovaya.jpg","sortOrder":9}' "Бренды"

echo ""
echo "=== Загружаем отзывы ==="
post "reviews" '{"name":"Елена М.","text":"Отличное ателье! Переделала здесь несколько шуб, работа выполнена качественно и в срок. Очень довольна результатом, всем рекомендую!","rating":5,"service":"Перекрой шубы","visible":true}' "Елена М."
post "reviews" '{"name":"Андрей К.","text":"Сдавал на хранение меховые изделия. Все организовано на высшем уровне, удобно, что есть услуга доставки. Спасибо!","rating":5,"service":"Хранение шуб","visible":true}' "Андрей К."
post "reviews" '{"name":"Наталья В.","text":"Хорошее качество работы, но сроки немного затянулись. В целом осталась довольна результатом, буду обращаться ещё.","rating":4,"service":"Ремонт шубы","visible":true}' "Наталья В."
post "reviews" '{"name":"Ирина С.","text":"Покрасили норковую шубу — как новая! Цвет ровный, мех мягкий. Мастера знают своё дело. Рекомендую.","rating":5,"service":"Окрашивание меха","visible":true}' "Ирина С."
post "reviews" '{"name":"Марина Д.","text":"Заказывала пошив шубы из норки. Три примерки, всё подогнали идеально. Качество на высоте, спасибо фабрике!","rating":5,"service":"Пошив шубы","visible":true}' "Марина Д."

echo ""
echo "=== Загружаем портфолио ==="
post "portfolio" '{"title":"Реставрация норковой шубы","slug":"restavratsiya-norkovoj-shuby","description":"Полная реставрация классической норковой шубы: замена подкладки, ремонт бортов, обновление фурнитуры.","category":"remont","sortOrder":1}' "Реставрация норковой шубы"
post "portfolio" '{"title":"Окрашивание в тёмный оттенок","slug":"okrashivanie-v-temnyj-ottenok","description":"Профессиональное окрашивание светлой норковой шубы в насыщенный тёмно-коричневый цвет.","category":"okrashivanie","sortOrder":2}' "Окрашивание в тёмный оттенок"
post "portfolio" '{"title":"Перекрой в жилет","slug":"perekroj-v-zhilet","description":"Перекрой длинной норковой шубы в стильный меховой жилет. Полное изменение фасона.","category":"perekroj","sortOrder":3}' "Перекрой в жилет"

echo ""
echo "=== Загружаем прайс-лист ==="
post "prices" '{"categoryName":"Перекрой","slug":"perekroj","sortOrder":1,"items":[{"label":"Полный перекрой","price":"96 000 ₽"},{"label":"Частичный перекрой","price":"67 000 ₽"}]}' "Перекрой"
post "prices" '{"categoryName":"Мелкий ремонт","slug":"melkij-remont","sortOrder":2,"items":[{"label":"Пришить вешалку (без стоимости)","price":"600 ₽"},{"label":"Изготовить и пришить вешалку","price":"1 000 ₽"},{"label":"Замена крючка шубного","price":"1 500 ₽"},{"label":"Замена крючка обтяжного","price":"900 ₽"},{"label":"Замена кулиски","price":"1 500 ₽"},{"label":"Замена пуговицы","price":"750 ₽"},{"label":"Замена фурнитуры","price":"950 ₽"},{"label":"Зашить разрыв (2/4/6/8–10 см)","price":"2 000 / 1 500 / 1 800 / 3 000 ₽"},{"label":"Поставить заплатку (4×4/6×6/8×8 см)","price":"3 500 / 5 500 / 8 500 ₽"},{"label":"Замена плечиков","price":"от 1 100 ₽"}]}' "Мелкий ремонт"
post "prices" '{"categoryName":"Низ изделия","slug":"niz-izdeliya","sortOrder":3,"items":[{"label":"Укоротить/удлинить низ (подкладка наглухо)","price":"от 13 000 ₽"},{"label":"Укоротить/удлинить низ (подкладка отлетная)","price":"от 15 000 ₽"},{"label":"Ремонт шлицы","price":"от 8 000 ₽"},{"label":"Реставрация низа","price":"от 12 000 ₽"}]}' "Низ изделия"
post "prices" '{"categoryName":"Рукава и плечи","slug":"rukava-i-plechi","sortOrder":4,"items":[{"label":"Укоротить/удлинить рукава без манжет","price":"от 5 800 ₽"},{"label":"Укоротить/удлинить рукава с манжетами","price":"от 7 200 ₽"},{"label":"Заузить/расширить","price":"от 6 000 ₽"},{"label":"Коррекция оката проймы","price":"от 7 800 ₽"},{"label":"Реставрация низа без манжет","price":"от 4 200 ₽"},{"label":"Реставрация низа с манжетами","price":"от 6 200 ₽"},{"label":"Перекрой рукава","price":"от 7 200 ₽"},{"label":"Перекрой плечевого пояса","price":"от 15 000 ₽"},{"label":"Ушить плечевой шов","price":"от 3 800 ₽"}]}' "Рукава и плечи"
post "prices" '{"categoryName":"Борт / боковые и средние швы","slug":"bort-shvy","sortOrder":5,"items":[{"label":"Ушить по боковым швам","price":"от 6 500 ₽"},{"label":"Ушить по среднему шву","price":"от 6 800 ₽"},{"label":"Ушить по среднему шву с разрезом","price":"от 6 800 ₽"},{"label":"Выравнивание бортов","price":"от 14 000 ₽"},{"label":"Реставрация бортов","price":"от 10 000 ₽"}]}' "Борт/швы"
post "prices" '{"categoryName":"Подкладка","slug":"podkladka","sortOrder":6,"items":[{"label":"Замена подкладки без утеплителя","price":"15 000 ₽"},{"label":"Замена подкладки с утеплителем","price":"от 20 000 ₽"},{"label":"Частичная реставрация подкладки","price":"5 500–8 200 ₽"}]}' "Подкладка"
post "prices" '{"categoryName":"Воротник","slug":"vorotnik","sortOrder":7,"items":[{"label":"Изменение выреза горловины","price":"от 7 700 ₽"},{"label":"Изменить фасон воротника","price":"от 10 000 ₽"},{"label":"Замена воротника","price":"от 13 000 ₽"},{"label":"Изготовить воротник без подкладки","price":"от 13 000 ₽"},{"label":"Изготовить воротник с подкладкой","price":"от 14 000 ₽"}]}' "Воротник"
post "prices" '{"categoryName":"Капюшон","slug":"kapyushon","sortOrder":8,"items":[{"label":"Изменить фасон капюшона","price":"от 16 800 ₽"},{"label":"Изготовить капюшон","price":"от 25 000 ₽"}]}' "Капюшон"
post "prices" '{"categoryName":"Опушка","slug":"opushka","sortOrder":9,"items":[{"label":"Изготовить опушку","price":"от 7 000 ₽"},{"label":"Пришить опушку","price":"от 6 000 ₽"}]}' "Опушка"
post "prices" '{"categoryName":"Карманы","slug":"karmany","sortOrder":10,"items":[{"label":"Реставрация карманов","price":"7 800 ₽"},{"label":"Замена подкладки в карманах","price":"3 000 ₽"},{"label":"Изготовление карманов","price":"6 500 ₽"}]}' "Карманы"
post "prices" '{"categoryName":"Ластовицы и другое","slug":"lastovicy","sortOrder":11,"items":[{"label":"Ремонт 2 подмышек с добавлением меха","price":"18 000 ₽"},{"label":"Ушить рукава по внутренним швам","price":"7 500 ₽"},{"label":"Уменьшить в плечах","price":"от 7 500 ₽"},{"label":"Ушить по боковым швам","price":"от 12 000 ₽"}]}' "Ластовицы"
post "prices" '{"categoryName":"Хранение шуб","slug":"hranenie","sortOrder":12,"items":[{"label":"Хранение шубы (сезон, апрель–октябрь)","price":"от 5 000 ₽"},{"label":"Хранение дублёнки (сезон)","price":"от 3 500 ₽"},{"label":"Забор курьером по Москве","price":"1 500 ₽"},{"label":"Доставка обратно","price":"1 500 ₽"}]}' "Хранение"
post "prices" '{"categoryName":"Химчистка","slug":"himchistka","sortOrder":13,"items":[{"label":"Химчистка шубы","price":"от 5 000 ₽"},{"label":"Химчистка дублёнки","price":"от 4 000 ₽"},{"label":"Химчистка кожаной куртки","price":"от 3 000 ₽"},{"label":"Антимольная обработка","price":"от 1 500 ₽"}]}' "Химчистка"
post "prices" '{"categoryName":"Окрашивание меха","slug":"okrashivanie","sortOrder":14,"items":[{"label":"Окрашивание шубы (полное)","price":"от 12 000 ₽"},{"label":"Тонирование","price":"от 8 000 ₽"},{"label":"Окрашивание жилета","price":"от 7 000 ₽"},{"label":"Окрашивание воротника/манжет","price":"от 3 000 ₽"}]}' "Окрашивание"

echo ""
echo "=== Готово! ==="
echo "Проверяем данные..."
echo "Услуги: $(curl -s "$BASE/services" -H "Authorization: Bearer $TOKEN" | python3 -c "import sys,json; print(json.load(sys.stdin)['totalDocs'])" 2>/dev/null)"
echo "Прайс: $(curl -s "$BASE/prices" -H "Authorization: Bearer $TOKEN" | python3 -c "import sys,json; print(json.load(sys.stdin)['totalDocs'])" 2>/dev/null)"
echo "Отзывы: $(curl -s "$BASE/reviews" -H "Authorization: Bearer $TOKEN" | python3 -c "import sys,json; print(json.load(sys.stdin)['totalDocs'])" 2>/dev/null)"
echo "Портфолио: $(curl -s "$BASE/portfolio" -H "Authorization: Bearer $TOKEN" | python3 -c "import sys,json; print(json.load(sys.stdin)['totalDocs'])" 2>/dev/null)"
