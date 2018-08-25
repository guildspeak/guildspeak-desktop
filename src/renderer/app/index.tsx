import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ApolloProvider } from 'react-apollo'
import store from '../store'
import styled, { injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Systembar from '../components/Systembar'
import Login from '../components/Login'
import StartupContainer from '../containers/StartupContainer'
import Register from '../components/Register'
import Application from '../components/Application'
import client from './client'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Francois+One');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: #33333d;
    color: #fff;
    overflow: hidden;
  }
`

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <AppWrapper>
            <Systembar />
            <Router>
              <Switch>
                <Route exact={false} path="/app" component={Application} />
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
