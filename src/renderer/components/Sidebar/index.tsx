import * as React from 'react'
import CurrentUser from '../CurrentUser'
import { Wrapper } from './styles'
import CurrentGuild from '../CurrentGuild'

const Sidebar = () => (
  <Wrapper>
    <CurrentGuild />
    <CurrentUser />
  </Wrapper>
)

export default Sidebar
