import * as React from 'react'
import Guilds from '../Guilds'
import CurrentUser from '../CurrentUser'
import { Wrapper } from './styles'

const Sidebar = () => (
  <Wrapper>
    <Guilds />
    <CurrentUser />
  </Wrapper>
)

export default Sidebar

