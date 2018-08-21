import * as React from 'react'
import CounterContainer from '../containers/CounterContainer'
import { Container, Row, Column } from 'react-rasta'

const Application = () => (
  <Container >
    <Row>
      <Column>
        <CounterContainer />
      </Column>
    </Row>
  </Container>
)

export default Application
