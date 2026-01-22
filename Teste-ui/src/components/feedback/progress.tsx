import React from 'react'

import { Progress } from '../ui'

export default function ProgressDemo() {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
          Upload em andamento
        </p>
        <Progress value={35} />
      </div>
      <div>
        <p className="text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
          Indexação
        </p>
        <Progress value={78} />
      </div>
    </div>
  )
}
