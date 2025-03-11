import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext({})
export function ContextProvider({ children }: any): JSX.Element {
  const [headerSubTitle, setHeaderSubTitle] = useState('')
  return (
    <GlobalContext.Provider value={{ headerSubTitle, setHeaderSubTitle }}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = (): any => useContext(GlobalContext)
export default useGlobalContext
