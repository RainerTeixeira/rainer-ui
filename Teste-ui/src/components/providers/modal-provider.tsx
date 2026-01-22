import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Modal {
  id: string
  title: string
  content: string
}

interface ModalContextType {
  openModal: (title: string, content: string) => void
  closeModal: (id: string) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function useModalProvider() {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModalProvider must be used within ModalProvider')
  return context
}

interface ModalProviderProps {
  children: ReactNode
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const [modals, setModals] = useState<Modal[]>([])

  const openModal = (title: string, content: string) => {
    const id = String(Date.now())
    setModals((prev) => [...prev, { id, title, content }])
  }

  const closeModal = (id: string) => {
    setModals((prev) => prev.filter((m) => m.id !== id))
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modals.map((m) => (
        <div key={m.id} className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}>
          <div className="w-full max-w-md rounded-lg border p-5" style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)' }}>
            <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{m.title}</h3>
            <p className="text-xs mb-4" style={{ color: 'var(--color-text-secondary)' }}>{m.content}</p>
            <button onClick={() => closeModal(m.id)} className="text-xs px-3 py-1 rounded-md" style={{ backgroundColor: 'var(--color-button-primary-default)', color: 'var(--color-button-primary-text)' }}>
              Fechar
            </button>
          </div>
        </div>
      ))}
    </ModalContext.Provider>
  )
}
