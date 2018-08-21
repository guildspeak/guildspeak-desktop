import * as React from 'react'

export interface Props {
  value: number
  incrementValue: () => any
  decrementValue: () => any
}

const Counter: React.SFC<Props> = ({ value, incrementValue, decrementValue }) => (
  <div>
    <p>Current value: {value}</p>
    <p>
      <button onClick={incrementValue}>Increment</button>
      <button onClick={decrementValue}>Decrement</button>
    </p>
  </div>
)

export default Counter
