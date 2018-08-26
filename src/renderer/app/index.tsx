import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import store from '../store'
import ApplicationContainer from '../containers/ApplicationContainer'
import { injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Systembar from '../components/Systembar'
import Login from '../components/Login'
import StartupContainer from '../containers/StartupContainer'
import Register from '../components/Register'
import client from './client'
import { style, AppWrapper } from './styles'
import { AppContainer } from 'react-hot-loader'

injectGlobal`${style}`

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <AppWrapper>
            <Systembar />
            <Router>
              <Switch>
                <Route exact={false} path="/app" component={ApplicationContainer} />
                <Route exact={true} path="/" component={StartupContainer} />
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/register" component={Register} />
              </Switch>
            </Router>
          </AppWrapper>
        </Provider>
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('app'),
  )
}

render()

// react-hot-loader
if ((module as any).hot) {
  (module as any).hot.accept()
}
