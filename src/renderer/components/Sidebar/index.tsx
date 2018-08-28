import * as React from 'react'
import CurrentUser from '../CurrentUser'
import { Wrapper } from './styles'
import CurrentGuildContainer from '../../containers/CurrentGuildContainer'

const Sidebar = () => (
  <Wrapper>
    <CurrentGuildContainer />
    <CurrentUser />
  </Wrapper>
)

export default Sidebar
