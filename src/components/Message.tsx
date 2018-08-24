import * as React from 'react'
import styled from 'styled-components'
import { MessageAuthorData } from './MessageAuthor'
import MessageHeader from './MessageHeader'

const Wrapper = styled.div`
 flex: 1;
`
const MessageBubble = styled.div`
  flex: 1;
  height: auto;
  word-break: break-all;
`
const MessageContent= styled.p`
  padding-right: 8px;
`

interface Props {
  content: string
  author: MessageAuthorData
  time: string
}

const Message: React.SFC<Props> = ({ content, author, time }) => (
  <Wrapper>
    <MessageBubble>
      <MessageHeader author={author} time={time} />
      <MessageContent>{content}</MessageContent>
      </MessageBubble>
  </Wrapper>
)

export default Message

