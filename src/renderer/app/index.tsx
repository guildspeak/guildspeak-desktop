import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import store from '../store'
import { injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Systembar from '../components/Systembar'
import client from './client'
import { style, AppWrapper } from './styles'
import { AppContainer } from 'react-hot-loader'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'
import { ModalProvider } from 'styled-react-modal'

injectGlobal`${style}`

const ApplicationContainer = Loadable({
  loader: () => import('../containers/ApplicationContainer'),
  loading: Loading
})

const StartupContainer = Loadable({
  loader: () => import('../containers/StartupContainer'),
  loading: Loading
})

const Login = Loadable({
  loader: () => import('../components/Login'),
  loading: Loading
})

const Register = Loadable({
  loader: () => import('../components/Register'),
  loading: Loading
})

const Settings = Loadable({
  loader: () => import('../components/Settings'),
  loading: Loading
})

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <AppWrapper>
            <Systembar />
            <ModalProvider>
              <Router>
                <Switch>
                  <Route path="/app" component={ApplicationContainer} />
                  <Route exact={true} path="/" component={StartupContainer} />
                  <Route exact={true} path="/login" component={Login} />
                  <Route exact={true} path="/register" component={Register} />
                  <Route exact={true} path="/settings" component={Settings} />
                </Switch>
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
if ((module as any).hot) {
  (module as any).hot.accept()
}
