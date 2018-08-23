import * as React from 'react'
import styled from 'styled-components'
import MessageAuthor, { MessageAuthorData } from './MessageAuthor'

const Wrapper = styled.div`
 flex: 1;
`
const MessageBubble = styled.div`
  flex: 1;
  height: auto;
  word-break: break-all;
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

