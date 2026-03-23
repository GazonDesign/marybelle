'use client'

import { useRef } from 'react'

interface PhoneInputProps {
  name: string
  className?: string
  required?: boolean
}

function formatPhone(raw: string): string {
  // Keep only digits
  const digits = raw.replace(/\D/g, '')

  // Handle Russian numbers: strip leading 8 or 7, always start with 7
  let d = digits
  if (d.startsWith('8') && d.length > 1) d = '7' + d.slice(1)
  if (!d.startsWith('7') && d.length > 0) d = '7' + d

  // Format: +7 (XXX) XXX-XX-XX
  if (d.length === 0) return ''
  if (d.length <= 1) return '+7'
  if (d.length <= 4) return `+7 (${d.slice(1)}`
  if (d.length <= 7) return `+7 (${d.slice(1, 4)}) ${d.slice(4)}`
  if (d.length <= 9) return `+7 (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7)}`
  return `+7 (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7, 9)}-${d.slice(9, 11)}`
}

export default function PhoneInput({ name, className = '', required = true }: PhoneInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = () => {
    const input = inputRef.current
    if (!input) return
    const cursorWasAtEnd = input.selectionStart === input.value.length
    const formatted = formatPhone(input.value)
    input.value = formatted
    if (cursorWasAtEnd) {
      input.setSelectionRange(formatted.length, formatted.length)
    }
  }

  const handleFocus = () => {
    const input = inputRef.current
    if (!input || input.value) return
    input.value = '+7'
  }

  return (
    <input
      ref={inputRef}
      type="tel"
      name={name}
      required={required}
      placeholder="+7 (___) ___-__-__"
      onChange={handleChange}
      onFocus={handleFocus}
      className={className}
    />
  )
}
