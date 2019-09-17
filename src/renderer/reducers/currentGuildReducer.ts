import { Reducer } from 'redux'

import {
  CurrentGuildActions,
  SET_CURRENT_GUILD_ID,
  SET_CURRENT_CHANNEL
} from '../actions/currentGuildActions'

export interface CurrentGuildState {
  readonly guildId: string
  readonly channelId: string
  readonly channelName: string
}

const defaultState: CurrentGuildState = {
  guildId: localStorage.getItem('currentGuildId') || null,
  channelId: localStorage.getItem('currentChannelId') || null,
  channelName: localStorage.getItem('currentChannelName') || null
}

export const currentGuildReducer: Reducer<CurrentGuildState> = (
  state = defaultState,
  action: CurrentGuildActions
) => {
  switch (action.type) {
    case SET_CURRENT_GUILD_ID: {
      localStorage.setItem('currentGuildId', action.payload.guildId)
      return {
        ...state,
        guildId: action.payload.guildId
      }
    }
    case SET_CURRENT_CHANNEL: {
      localStorage.setItem('currentChannelId', action.payload.channelId)
      localStorage.setItem('currentChannelName', action.payload.channelName)
      return {
        ...state,
        channelId: action.payload.channelId,
        channelName: action.payload.channelName
      }
    }
    default:
      return state
  }
}
