import * as React from 'react'
import Button from './Button'


export interface Props {
  value: string
  setToken: (token) => any
}

const AuthTokenComponent: React.SFC<Props> = ({ value, setToken }) => (
  <div />
)

export default AuthTokenComponent
