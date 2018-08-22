import * as React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'react-rasta'

const Wrapper = styled(Container)`
`

const Channel = styled(Row)`
  padding: 10px;
`
const data = [
  {
    id: 0,
    name: 'general'
  },
  {
    id: 1,
    name: 'offtopic'
  }
]

const Channels = () => (
  <Wrapper>
    <Row>Channels:</Row>
    {data.map(el => <Channel key={el.id}>el.name</Channel>)}
  </Wrapper>
)

export default Channels

