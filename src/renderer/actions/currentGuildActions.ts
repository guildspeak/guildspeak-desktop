import { Action, ActionCreator } from 'redux'

export const SET_CURRENT_GUILD_ID = 'SET_CURRENT_GUILD_ID'
export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL'

export interface SetCurrentGuildId extends Action {
  type: 'SET_CURRENT_GUILD_ID'
  payload: { guildId: string }
}

export const setCurrentGuildId: ActionCreator<SetCurrentGuildId> = guildId => ({
  type: SET_CURRENT_GUILD_ID,
  payload: { guildId }
})

export interface SetCurrentChannel extends Action {
  type: 'SET_CURRENT_CHANNEL'
  payload: { channelId: string; channelName: string }
}

export const setCurrentChannel: ActionCreator<SetCurrentChannel> = (channelId, channelName) => ({
  type: SET_CURRENT_CHANNEL,
  payload: { channelId, channelName }
})

export type CurrentGuildActions = SetCurrentGuildId | SetCurrentChannel
