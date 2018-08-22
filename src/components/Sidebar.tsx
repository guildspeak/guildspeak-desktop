import * as React from 'react'
import { Row, Column } from 'react-rasta'
import Guilds from './Guilds';
import styled from 'styled-components'

const Menu = styled(Row)`
  height: 40px;
  padding: 4px;
  background: hsla(240, 1%, 23%, 0.5);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
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

