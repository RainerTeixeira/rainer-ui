import React from 'react'

import { Button } from '../ui'

const slides = [
  { title: 'Receita', subtitle: 'Últimos 7 dias', value: 'R$ 12.430' },
  { title: 'Novos usuários', subtitle: 'Últimas 24h', value: '214' },
  { title: 'Tickets', subtitle: 'Hoje', value: '7 abertos' },
]

export default function Carousel() {
  const [index, setIndex] = React.useState(0)

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)
  const slide = slides[index]

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          Carousel
        </p>
        <div className="flex items-center gap-2">
          <Button label="Anterior" variant="outline" size="sm" onClick={prev} />
          <Button label="Próximo" variant="primary" size="sm" onClick={next} />
        </div>
      </div>

      <div
        className="rounded-lg border p-5"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-secondary)' }}
      >
        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          {slide.subtitle}
        </p>
        <p className="text-lg font-semibold mt-1" style={{ color: 'var(--color-text-primary)' }}>
          {slide.title}
        </p>
        <p className="text-2xl font-semibold mt-3" style={{ color: 'var(--color-text-primary)' }}>
          {slide.value}
        </p>
        <div className="flex gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: i === index ? 'var(--color-button-primary-default)' : 'var(--color-background-tertiary)',
              }}
              onClick={() => setIndex(i)}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
