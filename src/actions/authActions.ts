import { Action, ActionCreator } from 'redux'

export const SET_TOKEN = 'SET_TOKEN'

export interface SetTokenAction extends Action {
  type: 'SET_TOKEN',
  token: string,
}

export const setToken: ActionCreator<SetTokenAction> = (token) => ({
  type: SET_TOKEN,
  token,
})
