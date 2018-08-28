import { combineReducers } from 'redux'

import { AuthState, authReducer } from './authReducer'
import { CurrentChannelState, currentChannelReducer } from './currentChannelReducer'
import { CurrentGuildState, currentGuildReducer } from './currentGuildReducer'

export interface RootState {
  auth: AuthState
  currentChannel: CurrentChannelState
  currentGuild: CurrentGuildState
}

export const rootReducer = combineReducers<RootState | undefined>({
  auth: authReducer,
  currentChannel: currentChannelReducer,
  currentGuild: currentGuildReducer
})
