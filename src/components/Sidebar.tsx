import * as React from 'react'
import { Row, Column } from 'react-rasta'
import Guilds from './Guilds';

const Sidebar = () => (
  <Row>
    <Column>
      <Row>menu</Row>
    </Column>
    <Column>
      <Row>
        <Guilds />
      </Row>
    </Column>
  </Row>
)

export default Sidebar

