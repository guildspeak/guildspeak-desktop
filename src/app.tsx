import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Application from './components/Application'
import store from './store'
import { injectGlobal } from 'styled-components'

// Create main element
const mainElement = document.createElement('div')
document.body.appendChild(mainElement)
document.title = 'Guildspeak'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: #373740;
    overflow: hidden;
  }
`
const client = new ApolloClient({ uri: 'http://localhost:4000' });

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

render(Application)

// Hot Module Replacement API
if (typeof module.hot !== 'undefined') {
  module.hot.accept('./components/Application', () => {
    import('./components/Application').then(World => {
      render(World.default)
    })
  })
}
