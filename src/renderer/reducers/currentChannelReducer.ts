import { Reducer } from 'redux'

import { SET_CHANNELID, CurrentChannelActions } from '../actions/currentChannelActions'

export interface CurrentChannelState {
  readonly channelId: string
}

const defaultState: CurrentChannelState = {
  channelId: localStorage.getItem('currentChannelId')
}

export const currentChannelReducer: Reducer<CurrentChannelState> = (state = defaultState, action: CurrentChannelActions) => {
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
