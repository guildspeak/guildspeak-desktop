import { Reducer, combineReducers } from 'redux'

import { AuthState, authReducer } from './authReducer'

export interface RootState {
  auth: AuthState
}

export const rootReducer = combineReducers<RootState | undefined>({
  auth: authReducer
})
