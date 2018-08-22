import * as React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'react-rasta'
import Guild from './Guild'

const Wrapper = styled(Container)`
  background: gray;
`

const guildData = [
  {
    id: 0,
    name: 'smrootguild',
    channels: [{
      id: 0,
      name: 'general'
    },
    {
      id: 1,
      name: 'offtopic'
    }]
  },
  {
    id: 1,
    name: 'nastoletni',
    channels: [{
      id: 0,
      name: 'ogólne'
    },
    {
      id: 1,
      name: 'javascript'
    }]
  }
]



const Guilds = () => (
  <Wrapper>
    <Row>Guilds:</Row>
    {guildData.map(el => <Guild name={el.name} channels={el.channels} />)}
  </Wrapper>
)

export default Guilds

