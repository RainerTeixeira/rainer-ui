import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Notification {
  id: string
  message: string
  type: 'info' | 'success' | 'error'
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (message: string, type?: Notification['type']) => void
  removeNotification: (id: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function useNotificationProvider() {
  const context = useContext(NotificationContext)
  if (!context) throw new Error('useNotificationProvider must be used within NotificationProvider')
  return context
}

interface NotificationProviderProps {
  children: ReactNode
}

export default function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (message: string, type: Notification['type'] = 'info') => {
    const id = String(Date.now())
    setNotifications((prev) => [...prev, { id, message, type }])
    setTimeout(() => removeNotification(id), 3000)
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="rounded-md border px-3 py-2 text-xs"
            style={{
              borderColor: 'var(--color-border-default)',
              backgroundColor: n.type === 'error' ? 'var(--color-background-danger)' : n.type === 'success' ? 'var(--color-background-success)' : 'var(--color-background-secondary)',
              color: 'var(--color-text-primary)',
            }}
          >
            {n.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  )
}
