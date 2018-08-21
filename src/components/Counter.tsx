import * as React from 'react'
import Button from './Button'
import { Container, Row, Column } from 'react-rasta'

export interface Props {
  value: number
  incrementValue: () => any
  decrementValue: () => any
}

const Counter: React.SFC<Props> = ({ value, incrementValue, decrementValue }) => (
  <Container>
    <Row>
      <Column>
        Current value: {value}
      </Column>
      <Column>
        <Button primary onClick={incrementValue}>Increment</Button>
        <Button onClick={decrementValue}>Decrement</Button>
      </Column>
    </Row>
  </Container>
)

export default Counter
