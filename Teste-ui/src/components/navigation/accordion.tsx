import React from 'react'

import { Accordion } from '../ui'

export default function AccordionDemo() {
  return (
    <Accordion
      allowMultiple
      items={[
        {
          title: 'O que é o Rainersoft UI?',
          content: 'Uma biblioteca de componentes baseada em design tokens.',
        },
        {
          title: 'Como funciona o tema?',
          content: 'As cores vêm de CSS vars (var(--color-...)) aplicadas pelo TokensProvider.',
        },
        {
          title: 'Acessibilidade',
          content: 'Componentes priorizam foco visível, labels e estados consistentes.',
        },
      ]}
    />
  )
}
