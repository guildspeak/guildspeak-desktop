import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink, split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const URI = `${process.env.HOST}:${process.env.PORT}`
const USE_SSL = process.env.PORT === '443' ? 's' : ''

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
  uri: `ws${USE_SSL}://${URI}/`,
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
    uri: `http${USE_SSL}://${URI}`
  })
)

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
      }
      if (networkError) console.error(`[Network error]: ${networkError}`)
    }),
    authLink.concat(link)
  ]),
  cache: new InMemoryCache()
})
export default client
