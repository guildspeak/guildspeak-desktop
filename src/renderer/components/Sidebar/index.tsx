import * as React from 'react'
import CurrenctGuild from '../CurrentGuild'
import CurrentUser from '../CurrentUser'
import { Wrapper } from './styles'

const Sidebar = () => (
  <Wrapper>
    <CurrenctGuild />
    <CurrentUser />
  </Wrapper>
)

export default Sidebar
