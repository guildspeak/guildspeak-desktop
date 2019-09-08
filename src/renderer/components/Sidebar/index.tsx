import React from 'react'
import { Wrapper } from './styles'
import CurrentGuildContainer from '../../containers/CurrentGuildContainer'
import CurrentUser from '../CurrentUser'

const Sidebar = () => (
  <Wrapper>
    <CurrentGuildContainer />
    <CurrentUser />
  </Wrapper>
)

export default Sidebar
