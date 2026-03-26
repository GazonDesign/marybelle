'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getTracking } from '@/lib/utm'
import PhoneInput from '@/components/ui/PhoneInput'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'

const steps = [
  { step: '01', title: 'Привезите шубу', description: 'Привезите старое изделие в наше ателье или вызовите курьера.' },
  { step: '02', title: 'Оценка мастером', description: 'Мастер осмотрит изделие и определит его стоимость.' },
  { step: '03', title: 'Выберите новую', description: 'Подберите новую шубу или закажите пошив по индивидуальному проекту.' },
  { step: '04', title: 'Получите скидку', description: 'Стоимость старой шубы вычитается из цены новой. Доплачиваете разницу.' },
]

const examples = [
  { old: 'Норковая шуба (10 лет)', estimate: '30 000 ₽', newItem: 'Новая норковая шуба', newPrice: '180 000 ₽', youPay: '150 000 ₽' },
  { old: 'Шуба из лисы (5 лет)', estimate: '15 000 ₽', newItem: 'Меховой жилет из норки', youPay: '55 000 ₽', newPrice: '70 000 ₽' },
  { old: 'Каракулевая шуба (15 лет)', estimate: '10 000 ₽', newItem: 'Пальто с мехом', youPay: '70 000 ₽', newPrice: '80 000 ₽' },
]

const benefits = [
  'Принимаем шубы из любого меха и в любом состоянии',
  'Честная оценка — мастер при вас осмотрит изделие',
  'Скидка суммируется с сезонными акциями',
  'Можно обменять на пошив по индивидуальному проекту',
  'Забираем старую шубу курьером по Москве',
  'Работаем с 1870 года — 150+ лет доверия',
]

export default function TrejdInPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('sending')
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          source: 'trade-in',
          page: '/trejd-in',
          ...getTracking(),
        }),
      })
      if (typeof window !== 'undefined' && (window as any).ym) {
        (window as any).ym(106018856, 'reachGoal', 'form_submit_success')
      }
      // Envybox автозвонок
      const phone = formData.get('phone') as string
      const w = window as any
      if (phone && w.CallbackKillerApi) {
        w.CallbackKillerApi.requestCallback({ phone })
      }
    } catch { /* silent */ }
    setFormState('sent')
    form.reset()
    setTimeout(() => setFormState('idle'), 3000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase text-gold">
              Программа трейд-ин
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
              Обмен старой шубы на новую в Москве
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl">
              Сдайте старую шубу в трейд-ин и получите скидку на новое изделие.
              Принимаем шубы в любом состоянии.
            </p>
            <a
              href="#form"
              className="mt-8 px-12 py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer"
            >
              Оценить мою шубу
            </a>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-bg-warm border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-6 py-3 text-sm text-text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">Трейд-ин</span>
          </div>
        </div>

        {/* How it works */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">Как работает трейд-ин</h2>
            <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
              Поменять старую шубу на новую — просто. Четыре шага от старого изделия к новому.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <div key={i} className="text-center">
                  <span className="inline-block font-serif text-5xl text-brand/20 mb-4">{s.step}</span>
                  <h3 className="font-serif text-xl text-black mb-3">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="py-20 md:py-28 bg-bg-warm">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl md:text-4xl text-black mb-4 text-center">Примеры обмена</h2>
            <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
              Реальные примеры трейд-ин шубы в нашем ателье. Стоимость зависит от состояния изделия.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {examples.map((ex, i) => (
                <div key={i} className="bg-white p-8 border border-border-light">
                  <p className="text-sm text-text-muted uppercase tracking-wide mb-2">Сдаёте</p>
                  <p className="font-serif text-lg text-black mb-1">{ex.old}</p>
                  <p className="text-brand font-medium text-lg mb-6">Оценка: {ex.estimate}</p>

                  <div className="flex justify-center my-4">
                    <ArrowRight size={24} className="text-brand/40" />
                  </div>

                  <p className="text-sm text-text-muted uppercase tracking-wide mb-2">Получаете</p>
                  <p className="font-serif text-lg text-black mb-1">{ex.newItem}</p>
                  <p className="text-text-muted line-through text-sm">{ex.newPrice}</p>
                  <p className="text-brand font-medium text-2xl">Вы платите: {ex.youPay}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-black mb-8">Условия программы</h2>
                <div className="space-y-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-brand mt-0.5 shrink-0" strokeWidth={1.5} />
                      <p className="text-text-body">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-bg-warm p-10 border border-border-light">
                <p className="font-serif text-2xl text-black mb-4">Какие шубы принимаем?</p>
                <ul className="space-y-3 text-text-body">
                  <li>Норка, соболь, каракуль, лиса, песец, бобр</li>
                  <li>Шубы, полушубки, жилеты, манто</li>
                  <li>Любой возраст и состояние</li>
                  <li>Дублёнки и кожаные изделия — тоже!</li>
                </ul>
                <p className="mt-6 text-sm text-text-muted">
                  Не подходит: искусственный мех, экокожа
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="form" className="py-20 md:py-28 bg-bg-dark">
          <div className="max-w-[700px] mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 text-center">
              Узнайте стоимость вашей шубы
            </h2>
            <p className="text-white/60 text-center mb-10">
              Оставьте заявку — мастер перезвонит и ответит на все вопросы по программе трейд-ин.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                required
                placeholder="Ваше имя"
                className="w-full px-4 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-brand transition-colors"
              />
              <PhoneInput
                name="phone"
                className="w-full px-4 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-brand transition-colors"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Что за шуба? (мех, возраст, состояние)"
                className="w-full px-4 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-brand transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className="w-full py-4 bg-brand text-white font-light tracking-widest text-sm btn-shimmer disabled:opacity-60"
              >
                {formState === 'idle' && 'Оценить шубу'}
                {formState === 'sending' && 'Отправка...'}
                {formState === 'sent' && 'Спасибо! Мы перезвоним.'}
              </button>
              <p className="text-white/30 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>

            <div className="mt-10 text-center">
              <p className="text-white/50 text-sm mb-2">Или позвоните нам</p>
              <a href="tel:+74952254444" className="inline-flex items-center gap-2 text-gold text-xl hover:opacity-80 transition-opacity">
                <Phone size={20} strokeWidth={1.5} />
                +7 (495) 225-44-44
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
