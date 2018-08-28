import { Action, ActionCreator } from 'redux'

export const SET_GUILDID = 'SET_GUILDID'
export const GET_GUILDID = 'GET_GUILDID'

export interface SetGuildId extends Action {
  type: 'SET_GUILDID'
  payload: { guildId: string }
}

export interface GetGuildId extends Action {
  type: 'GET_GUILDID'
  payload: {}
}

export const setGuildId: ActionCreator<SetGuildId> = guildId => ({
  type: SET_GUILDID,
  payload: { guildId }
})

export type CurrentGuildActions = SetGuildId
