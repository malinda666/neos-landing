import { FC, ReactNode, createContext, useContext, useState } from 'react'

interface IUIContext {
  scroll: number
  updateScroll: (value: number) => void
}

interface IUIContextProvider {
  children: ReactNode
}

export const UIContext = createContext<IUIContext>({ scroll: 0, updateScroll: () => null })

export const UIContextProvider: FC<IUIContextProvider> = ({ children }) => {
  const [scroll, setScroll] = useState<number>(0)

  const updateScroll = (value: number) => {
    setScroll(value)
  }

  return <UIContext.Provider value={{ scroll, updateScroll }}>{children}</UIContext.Provider>
}

export const useUI = () => useContext(UIContext)
