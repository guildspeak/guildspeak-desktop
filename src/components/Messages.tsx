import * as React from 'react'
import styled from 'styled-components'
import { Container } from 'react-rasta'
import Message from './Message'

const Wrapper = styled(Container)`
  background: gray;
  overflow: auto;
  height: calc(100vh - 60px);
`

const messagesData = [
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },
  {
    id: 0,
    username: 'smroot',
    content: 'hi'
  },
  {
    id: 1,
    username: 'kirito',
    content: 'eluwa'
  },

]

const Messages = () => (
  <Wrapper>
    {messagesData.map(el => <Message content={el.content} key={el.id}/>)}
  </Wrapper>
)

export default Messages

