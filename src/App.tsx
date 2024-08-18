import { lazy } from 'solid-js'
import type { Component } from 'solid-js'
import { Route, Router } from '@solidjs/router'
import type { RouteSectionProps } from '@solidjs/router'

import { AppContext, makeAppContext } from './Context'
import NotFound from '@/pages/NotFound'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Login = lazy(() => import('@/pages/Login'))
const User = lazy(() => import('@/pages/User'))
const UsersList = lazy(() => import('@/pages/UsersList'))
const RecordId = lazy(() => import('@/pages/RecordId'))

const App = () => {
  const context = makeAppContext()

  return (
    <>
      <AppContext.Provider value={context}>
        <Router root={Layout}>
          <Route path="/" component={Home} />
          <Route path="/users">
            <Route path="/" component={UsersList} />
            <Route path="/:userId" component={User} />
          </Route>
          <Route path="/record">
            <Route path="/:recordId">
              <Route path="/" component={RecordId} />
              <Route path="/:recId" component={RecordId} />
            </Route>
          </Route>
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
    <div class="flex h-screen flex-col justify-between">
      <Header />
      <div class="mx-auto mb-auto max-w-screen-2xl bg-slate-400">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
