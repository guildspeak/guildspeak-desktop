import { CurrentGuildActions } from './currentGuildActions'
import { SetTokenAction } from './authActions'

export type RootActions = SetTokenAction | CurrentGuildActions
