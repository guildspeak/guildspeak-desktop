import { Reducer } from 'redux'

import {
  CurrentGuildActions,
  SET_CURRENT_GUILD,
  SET_CURRENT_CHANNEL
} from '../actions/currentGuildActions'

export type CurrentGuildState = {
  guildId: string
  guildName: string
  channelId: string
  channelName: string
}

const defaultState: CurrentGuildState = {
  guildId: localStorage.getItem('currentGuildId') || null,
  guildName: localStorage.getItem('currentGuildName') || null,
  channelId: localStorage.getItem('currentChannelId') || null,
  channelName: localStorage.getItem('currentChannelName') || null
}

export const currentGuildReducer: Reducer<CurrentGuildState> = (
  state = defaultState,
  action: CurrentGuildActions
) => {
  switch (action.type) {
    case SET_CURRENT_GUILD: {
      localStorage.setItem('currentGuildId', action.payload.guildId)
      localStorage.setItem('currentGuildName', action.payload.guildName)
      return {
        ...state,
        guildId: action.payload.guildId,
        guildName: action.payload.guildName
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
