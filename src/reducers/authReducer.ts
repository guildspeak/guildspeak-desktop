import { Reducer } from 'redux'

import { SetTokenAction, SET_TOKEN } from '../actions/authActions'

export interface AuthState {
  readonly token: string
}

const defaultState: AuthState = {
  token: ''
}

export const authReducer: Reducer<AuthState> = (state = defaultState, action: SetTokenAction) => {
  switch (action.type) {
    case SET_TOKEN: {
      localStorage.setItem('token', action.value)
      return {
        ...state,
        token: action.value,
      }
    }
    default:
      return state
  }
}
