import * as React from 'react'
import Guilds from '../Guilds'
import CurrentUser from '../CurrentUser'
import { Wrapper, LogoutButton } from './styles'

const Sidebar = () => (
  <Wrapper>
    <CurrentUser />
    <Guilds />
    <LogoutButton>Log Out</LogoutButton>
  </Wrapper>
)

export default Sidebar

