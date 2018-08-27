import * as React from 'react'
import Guilds from '../Guilds'
import CurrentUser from '../CurrentUser'
import { Wrapper } from './styles'

const Sidebar = () => (
  <Wrapper>
    <CurrentUser />
    <Guilds />
  </Wrapper>
)

export default Sidebar

