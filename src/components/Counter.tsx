import * as React from 'react'
import Button from './Button'


export interface Props {
  value: number
  incrementValue: () => any
  decrementValue: () => any
}

const Counter: React.SFC<Props> = ({ value, incrementValue, decrementValue }) => (
  <div>
    <div>
      <div>
        Current value: {value}
      </div>
      <div>
        <Button primary onClick={incrementValue}>Increment</Button>
        <Button onClick={decrementValue}>Decrement</Button>
      </div>
    </div>
  </div>
)

export default Counter
