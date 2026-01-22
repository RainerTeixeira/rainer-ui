import React, { createContext, useContext, useState, ReactNode } from 'react'

interface DataItem {
  id: string
  title: string
}

interface DataContextType {
  items: DataItem[]
  addItem: (title: string) => void
  removeItem: (id: string) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export function useDataProvider() {
  const context = useContext(DataContext)
  if (!context) throw new Error('useDataProvider must be used within DataProvider')
  return context
}

interface DataProviderProps {
  children: ReactNode
}

export default function DataProvider({ children }: DataProviderProps) {
  const [items, setItems] = useState<DataItem[]>([
    { id: '1', title: 'Item A' },
    { id: '2', title: 'Item B' },
  ])

  const addItem = (title: string) => {
    setItems((prev) => [...prev, { id: String(Date.now()), title }])
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  return <DataContext.Provider value={{ items, addItem, removeItem }}>{children}</DataContext.Provider>
}
