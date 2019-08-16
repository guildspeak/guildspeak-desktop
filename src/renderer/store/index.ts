import { combineReducers, compose, applyMiddleware, createStore, Store, Action } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer, RootState } from '../reducers'

const configureStore = (initialState?: RootState): Store<RootState | undefined> => {
  const middlewares: any[] = []
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares))
  return createStore<RootState | undefined, Action<any>, {}, {}>(
    rootReducer,
    initialState,
    enhancer
  )
}

const store = configureStore()

if (typeof module.hot !== 'undefined') {
  module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').rootReducer))
}

export default store
