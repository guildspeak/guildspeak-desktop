import { hot } from 'react-hot-loader/root'
import React from 'react'
import loadable from '@loadable/component'
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
import { ErrorBoundary } from '../utils/hoc'
import Loading from '../components/Loading'

const GlobalStyle = createGlobalStyle`${style}`

const StartupContainer = loadable(() => import('../containers/StartupContainer'), {
  fallback: <Loading />
})

const ApplicationContainer = loadable(() => import('../containers/ApplicationContainer'), {
  fallback: <LoadingWrapper>Starting Guildspeak...</LoadingWrapper>
})

const Login = loadable(() => import('../views/Login'), {
  fallback: <Loading />
})

const Register = loadable(() => import('../views/Register'), {
  fallback: <Loading />
})

const Settings = loadable(() => import('../views/Settings'), {
  fallback: <Loading />
})

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <GlobalStyle />
      <AppWrapper>
        <Systembar />
        <ModalProvider>
          <ErrorBoundary>
            <Router>
              <Route path="/" component={StartupContainer} />
              <Route path="/app" component={ApplicationContainer} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/settings" component={Settings} />
            </Router>
          </ErrorBoundary>
        </ModalProvider>
      </AppWrapper>
    </Provider>
  </ApolloProvider>
)

export default hot(App)
