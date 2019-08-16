import { Reducer } from 'redux'

import { SET_GUILDID, CurrentGuildActions } from '../actions/currentGuildActions'

export interface CurrentGuildState {
  readonly guildId: string
}

const defaultState: CurrentGuildState = {
  guildId: localStorage.getItem('currentGuildId')
}

export const currentGuildReducer: Reducer<CurrentGuildState> = (
  state = defaultState,
  action: CurrentGuildActions
) => {
  switch (action.type) {
    case SET_GUILDID: {
      localStorage.setItem('currentGuildId', action.payload.guildId)
      return {
        ...state,
        guildId: action.payload.guildId
      }
    }
    default:
      return state
  }
}
