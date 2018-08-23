import { Action, ActionCreator } from 'redux'

export const SET_TOKEN = 'SET_TOKEN'
export const DECREMENT = 'DECREMENT'

export interface SetTokenAction extends Action {
  type: 'SET_TOKEN',
  value: string,
}

export const setToken: ActionCreator<SetTokenAction> = (token) => ({
  type: SET_TOKEN,
  value: token,
})
