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
import { injectGlobal } from 'styled-components'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
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

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  // const token = localStorage.getItem('auth_token')
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjamwycXh3OW0wMDhtMGIxOGdpOW1jYXJrIiwiaWF0IjoxNTM0OTUyMTcxfQ.AFDlpNS1gWkTA8xDuSZbEZGqcOMcSrJNi5u-3503S7o'
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
  uri: `ws://localhost:4000/`,
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
    uri: 'http://localhost:4000',
  }),
);


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

// Render components
const render = (Component: () => JSX.Element) => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component />
        </Provider>
      </ApolloProvider>
    </AppContainer>,
    mainElement
  )
}

render(()=><Application/>)

// Hot Module Replacement API
if (typeof module.hot !== 'undefined') {
  module.hot.accept('./components/Application', () => {
    const NewApp = require('./components/Application')
    render(() => NewApp)
  })
}
