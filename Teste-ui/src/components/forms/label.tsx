import React from 'react'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  requiredMark?: boolean
}

export default function Label({ children, requiredMark = false, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={props.className}
      style={{
        color: 'var(--color-text-secondary)',
        fontSize: 12,
        fontWeight: 600,
        ...(props.style ?? {}),
      }}
    >
      {children}
      {requiredMark ? (
        <span aria-hidden="true" style={{ color: 'var(--color-status-error-default)', marginLeft: 4 }}>
          *
        </span>
      ) : null}
    </label>
  )
}
