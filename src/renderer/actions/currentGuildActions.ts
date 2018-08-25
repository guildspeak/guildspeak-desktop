import { Action, ActionCreator } from 'redux'

export const SET_CHANNELID = 'SET_CHANNELID'

export interface SetChannelId extends Action {
  type: 'SET_CHANNELID',
  payload: { channelId: string},
}
export interface GetChannelId extends Action {
  type: 'SET_CHANNELID',
  payload: { },
}

export const setChannelId: ActionCreator<SetChannelId> = (channelId) => ({
  type: SET_CHANNELID,
  payload: { channelId },
})

export type CurrentGuildActions = SetChannelId
