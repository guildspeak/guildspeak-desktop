import * as React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'react-rasta'
import Guild from './Guild'

const Wrapper = styled(Container)`
  overflow: auto;
  height: calc(100vh - 40px);
  background: hsla(240, 1%, 23%, 0.5);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
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

