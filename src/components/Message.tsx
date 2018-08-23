import * as React from 'react'
import styled from 'styled-components'
import MessageAuthor, { MessageAuthorData } from './MessageAuthor'

const Wrapper = styled.div`
  flex:  0 1;
`
const MessageBubble = styled.div`
  flex: 1 1 auto;
  clear: both;
  border-radius: 5px;
  padding: 8px;
  margin: 8px 12px;
  width: 90%;
  background: #27272f;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);
`
const MessageContent= styled.p`
`

interface Props {
  content: string
  author: MessageAuthorData
}

const Message: React.SFC<Props> = ({ content, author }) => (
  <Wrapper>
    <MessageBubble>
      <MessageAuthor author={author} />
      <MessageContent>{content}</MessageContent>
      </MessageBubble>
  </Wrapper>
)

export default Message

