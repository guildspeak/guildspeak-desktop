import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import store from '../store'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Systembar from '../components/Systembar'
import client from './client'
import { style, AppWrapper } from './styles'
import { AppContainer } from 'react-hot-loader'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'
import { ModalProvider } from 'styled-react-modal'
import { Wrapper as LoadingWrapper } from '../components/Loading/styles'
import Settings from '../views/Settings'

const GlobalStyle = createGlobalStyle`${style}`

const ApplicationContainer = Loadable({
  loader: () => import('../containers/ApplicationContainer'),
  loading: () => <LoadingWrapper>Starting Guildspeak...</LoadingWrapper>
})

const StartupContainer = Loadable({
  loader: () => import('../containers/StartupContainer'),
  loading: Loading
})

const Login = Loadable({
  loader: () => import('../views/Login'),
  loading: Loading
})

const Register = Loadable({
  loader: () => import('../views/Register'),
  loading: Loading
})

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <GlobalStyle />
          <AppWrapper>
            <Systembar />
            <ModalProvider>
              <Router>
                <Route exact={true} path="/" component={StartupContainer} />
                <Route exact={true} path="/app" component={ApplicationContainer} />
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/register" component={Register} />
                <Route exact={true} path="/settings" component={Settings} />
              </Router>
            </ModalProvider>
          </AppWrapper>
        </Provider>
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render()

// react-hot-loader
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept()
}
