import { hot } from 'react-hot-loader/root'
import React from 'react'
import loadable from '@loadable/component'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Systembar from '../components/Systembar'
import client from './client'
import { style, AppWrapper } from '../themes/styles'
import { ModalProvider } from 'styled-react-modal'
import { ErrorBoundary } from '../utils/hoc'
import { ThemeProvider, createGlobalStyle } from '../utils/styled-components'
import darkTheme from '../themes/dark'
import { Spinner, Center } from '../components/shared'

const GlobalStyle = createGlobalStyle`${style}`

const StartupContainer = loadable(() => import('../containers/StartupContainer'), {
  fallback: (
    <Center>
      <Spinner />
    </Center>
  )
})

const ApplicationContainer = loadable(() => import('../containers/ApplicationContainer'), {
  fallback: <Center>Starting Guildspeak...</Center>
})

const Login = loadable(() => import('../views/Login'), {
  fallback: (
    <Center>
      <Spinner />
    </Center>
  )
})

const Register = loadable(() => import('../views/Register'), {
  fallback: (
    <Center>
      <Spinner />
    </Center>
  )
})

const Settings = loadable(() => import('../views/Settings'), {
  fallback: (
    <Center>
      <Spinner />
    </Center>
  )
})

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <>
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
        </>
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
)

export default hot(App)
