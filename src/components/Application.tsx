import * as React from 'react'
import CounterContainer from '../containers/CounterContainer'
import Button from './Button'

const Application = () => (
  <div>
    Hello World from Electron!
    <CounterContainer />
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
)

export default Application
