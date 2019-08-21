import { Action, ActionCreator } from 'redux'

export const SET_CURRENT_GUILD_ID = 'SET_CURRENT_GUILD_ID'
export const SET_CURRENT_CHANNEL_ID = 'SET_CURRENT_CHANNEL_ID'

export interface SetCurrentGuildId extends Action {
  type: 'SET_CURRENT_GUILD_ID'
  payload: { guildId: string }
}

export const setCurrentGuildId: ActionCreator<SetCurrentGuildId> = guildId => ({
  type: SET_CURRENT_GUILD_ID,
  payload: { guildId }
})

export interface SetCurrentChannelId extends Action {
  type: 'SET_CURRENT_CHANNEL_ID'
  payload: { channelId: string }
}

export const setCurrentChannelId: ActionCreator<SetCurrentChannelId> = channelId => ({
  type: SET_CURRENT_CHANNEL_ID,
  payload: { channelId }
})

export type CurrentGuildActions = SetCurrentGuildId | SetCurrentChannelId
