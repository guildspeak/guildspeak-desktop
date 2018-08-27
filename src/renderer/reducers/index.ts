import { Reducer, combineReducers } from 'redux'

import { AuthState, authReducer } from './authReducer'
import { CurrentGuildState, currentGuildReducer } from './currentGuildReducer'

export interface RootState {
  auth: AuthState
  currentGuild: CurrentGuildState
}

export const rootReducer = combineReducers<RootState | undefined>({
  auth: authReducer,
  currentGuild: currentGuildReducer
})
