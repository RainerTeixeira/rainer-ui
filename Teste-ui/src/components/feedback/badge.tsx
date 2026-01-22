import React from 'react'

import { Badge } from '../ui'

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary" label="Secondary" />
      <Badge variant="success" label="Success" />
      <Badge variant="warning" label="Warning" />
      <Badge variant="destructive" label="Error" />
    </div>
  )
}
