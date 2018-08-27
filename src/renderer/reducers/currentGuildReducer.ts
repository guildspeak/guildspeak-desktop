import { Reducer } from 'redux'

import { CurrentGuildActions, SET_CHANNELID } from '../actions/currentGuildActions'

export interface CurrentGuildState {
  readonly channelId: string
}

const defaultState: CurrentGuildState = {
  channelId: localStorage.getItem('currentChannelId')
}

export const currentGuildReducer: Reducer<CurrentGuildState> = (state = defaultState, action: CurrentGuildActions) => {
  switch (action.type) {
    case SET_CHANNELID: {
      localStorage.setItem('currentChannelId', action.payload.channelId)
      return {
        ...state,
        channelId: action.payload.channelId
      }
    }
    default:
      return state
  }
}
