import { createContext, useContext, createSignal } from 'solid-js'

export const makeAppContext = () => {
  const [logged, setLogged] = createSignal(false)

  const login = () => setLogged(true)
  const logout = () => setLogged(false)

  return [logged, login, logout] as const
}

type LoggedContext = ReturnType<typeof makeAppContext>

export const AppContext = createContext<LoggedContext>()
export const useAppContext = () => useContext(AppContext)!
