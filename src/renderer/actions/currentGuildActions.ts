import { Action, ActionCreator } from 'redux'

export const SET_CURRENT_GUILD = 'SET_CURRENT_GUILD'
export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL'

export interface SetCurrentGuild extends Action {
  type: 'SET_CURRENT_GUILD'
  payload: { guildId: string; guildName: string }
}

export const setCurrentGuild: ActionCreator<SetCurrentGuild> = (guildId, guildName) => ({
  type: SET_CURRENT_GUILD,
  payload: { guildId, guildName }
})

export interface SetCurrentChannel extends Action {
  type: 'SET_CURRENT_CHANNEL'
  payload: { channelId: string; channelName: string }
}

export const setCurrentChannel: ActionCreator<SetCurrentChannel> = (channelId, channelName) => ({
  type: SET_CURRENT_CHANNEL,
  payload: { channelId, channelName }
})

export type CurrentGuildActions = SetCurrentGuild | SetCurrentChannel
