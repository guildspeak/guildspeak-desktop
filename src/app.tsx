import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import Application from './components/Application'
import store from './store'
import styled, { injectGlobal } from 'styled-components'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Systembar from './components/Systembar'
import LoginContainer from './containers/LoginContainer'
import StartupContainer from './containers/StartupContainer'
import RegisterContainer from './containers/RegisterContainer'
// Create main element
const mainElement = document.createElement('div')
document.body.appendChild(mainElement)
document.title = 'Guildspeak'

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
const URI = `${process.env.HOST}:${process.env.PORT}`

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('token')
  if (!operation) throw new Error('operation error')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  })
  // @ts-ignore
  return forward(operation)
})

const wsLink = new WebSocketLink({
  uri: `ws://${URI}/`,
  options: {
    reconnect: true
  }
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const doc = getMainDefinition(query)
    return doc.kind === 'OperationDefinition' && doc.operation === 'subscription'
  },
  wsLink,
  new HttpLink({
    uri: `http://${URI}`,
  }),
)


const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        )
      if (networkError) console.error(`[Network error]: ${networkError}`)
    }),
    authLink.concat(link),
  ]),
  cache: new InMemoryCache()
})

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`



// Render components
ReactDOM.render(
  <AppContainer>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppWrapper>
          <Systembar />
          <Router>
            <Switch>
            <Route exact path="/register" component={RegisterContainer} />
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/" component={StartupContainer} />
            </Switch>
          </Router>

        </AppWrapper>
      </Provider>
    </ApolloProvider>
  </AppContainer>,
  mainElement
)
