import React from 'react';

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Avatar({ 
  src,
  alt = 'Usuário',
  fallback = 'US',
  size = 'md'
}: AvatarProps) {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg'
  }
  
  const [hasError, setHasError] = React.useState(false)
  
  const handleError = () => {
    setHasError(true)
  }
  
  if (src && !hasError) {
    return (
      <div className={`relative inline-flex items-center justify-center rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <img
          src={src}
          alt={alt}
          onError={handleError}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }
  
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full font-medium ${sizeClasses[size]}`}
      style={{
        backgroundColor: 'var(--color-background-tertiary)',
        color: 'var(--color-text-secondary)',
      }}
    >
      {fallback}
    </div>
  )
}
