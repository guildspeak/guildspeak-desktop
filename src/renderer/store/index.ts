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

export default store
