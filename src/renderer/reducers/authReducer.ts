import { Reducer } from 'redux'

import { SetTokenAction, SET_TOKEN } from '../actions/authActions'

export interface AuthState {
  readonly token: string
}

const defaultState: AuthState = {
  token: localStorage.getItem('token')
}

export const authReducer: Reducer<AuthState> = (state = defaultState, action: SetTokenAction) => {
  switch (action.type) {
    case SET_TOKEN: {
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        token: action.payload.token,
      }
    }
    default:
      return state
  }
}
