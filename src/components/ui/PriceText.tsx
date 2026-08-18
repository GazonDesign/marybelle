/*
  Сезонная витрина цен: строка цены может нести зачёркнутую «цену без скидки»
  в формате "~~от 21 500 ₽~~ от 15 000 ₽" (часть в ~~ ~~ рендерится зачёркнутой).
  payPart() отдаёт часть «к оплате» — для Schema.org и любых расчётов по цене.
*/
const SEASON_RE = /^~~(.+?)~~\s*(.+)$/

export function payPart(price: string): string {
  const m = price.match(SEASON_RE)
  return m ? m[2] : price
}

export default function PriceText({ price }: { price: string }) {
  const m = price.match(SEASON_RE)
  if (!m) return <>{price}</>
  return (
    <>
      <s className="text-text-muted font-normal opacity-70 mr-2">{m[1]}</s>
      {m[2]}
    </>
  )
}
