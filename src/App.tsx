import { lazy } from 'solid-js'
import type { Component } from 'solid-js'
import { Route, Router, A } from '@solidjs/router'
import type { RouteSectionProps } from '@solidjs/router'

import { AppContext, makeAppContext } from './Context'
import NotFound from '@/pages/NotFound'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Login = lazy(() => import('./pages/Login'))
const User = lazy(() => import('./pages/User'))
const UsersList = lazy(() => import('./pages/UsersList'))

const App = () => {
  const context = makeAppContext()

  return (
    <>
      <AppContext.Provider value={context}>
        <Router root={Layout}>
          <Route path="/" component={Home} />
          <Route path="/users/" component={UsersList} />
          <Route path="/users/:id" component={User} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Router>
      </AppContext.Provider>
    </>
  )
}

export default App

const Layout: Component<RouteSectionProps<unknown>> = (props) => {
  return (
    <>
      <header>
        MENU
        <A href="/">Home</A>
        <A href="/about">About</A>
        <A href="/login">Login</A>
        <A href="/users">User List</A>
        <A href="/users/1">User 1</A>
        <A href="/users/2">User 2</A>
      </header>
      {props.children}
      <footer>Footer Solid JS</footer>
    </>
  )
}
