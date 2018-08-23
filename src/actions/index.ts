import { SetTokenAction } from './authActions'

export type RootActions = SetTokenAction[keyof SetTokenAction]
