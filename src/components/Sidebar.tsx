import * as React from 'react'
import { Row, Column } from 'react-rasta'
import Guilds from './Guilds';
import styled from 'styled-components'

const Menu = styled(Row)`
  height: 24px;
`

const Sidebar = () => (
  <Row>
    <Column>
      <Menu>menu</Menu>
    </Column>
    <Column>
      <Row>
        <Guilds />
      </Row>
    </Column>
  </Row>
)

export default Sidebar

