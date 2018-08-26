import * as React from 'react'
import Guilds from '../Guilds'
import CurrentUser from '../CurrentUser'
import { Wrapper, LogButton } from './styles'

const Sidebar = () => (
  <Wrapper>
    <Guilds />
    <CurrentUser />
    <LogButton>Log Out</LogButton>
  </Wrapper>
)

export default Sidebar

