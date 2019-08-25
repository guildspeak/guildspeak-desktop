import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import store from '../store'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Systembar from '../components/Systembar'
import client from './client'
import { style, AppWrapper } from './styles'
import { ModalProvider } from 'styled-react-modal'
import { Wrapper as LoadingWrapper } from '../components/Loading/styles'
import { withLazyLoading } from '../utils/hoc'

const GlobalStyle = createGlobalStyle`${style}`

const LazyApplicationContainer = React.lazy(() => import('../containers/ApplicationContainer'))

const ApplicationContainer = props => {
  return (
    <React.Suspense fallback={<LoadingWrapper>Starting Guildspeak...</LoadingWrapper>}>
      <LazyApplicationContainer {...props} />
    </React.Suspense>
  )
}

const LazyStartupContainer = React.lazy(() => import('../containers/StartupContainer'))
const LazyLogin = React.lazy(() => import('../views/Login'))
const LazyRegister = React.lazy(() => import('../views/Register'))
const LazySettings = React.lazy(() => import('../views/Settings'))

const StartupContainer = props => withLazyLoading(props)(LazyStartupContainer)
const Login = props => withLazyLoading(props)(LazyLogin)
const Register = props => withLazyLoading(props)(LazyRegister)
const Settings = props => withLazyLoading(props)(LazySettings)

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <GlobalStyle />
      <AppWrapper>
        <Systembar />
        <ModalProvider>
          <Router>
            <Route path="/" component={StartupContainer} />
            <Route path="/app" component={ApplicationContainer} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/settings" component={Settings} />
          </Router>
        </ModalProvider>
      </AppWrapper>
    </Provider>
  </ApolloProvider>
)

export default hot(App)
