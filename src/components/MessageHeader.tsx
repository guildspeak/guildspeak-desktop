import * as React from 'react'
import styled from 'styled-components'
import MessageAuthor, { MessageAuthorData } from './MessageAuthor'
import MessageTimestamp from './MessageTimestamp'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

interface Props {
  author: MessageAuthorData
  time: string
}

const MessageHeader: React.SFC<Props> = ({ author, time }) => (
  <Wrapper>
    <MessageAuthor author={author} /><MessageTimestamp time={time} />
  </Wrapper>
)

export default MessageHeader
