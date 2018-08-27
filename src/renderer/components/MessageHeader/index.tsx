import * as React from 'react'
import MessageAuthor, { MessageAuthorData } from '../MessageAuthor'
import MessageTimestamp from '../MessageTimestamp'
import { Wrapper } from './styles'

interface Props {
  author: MessageAuthorData
  time: string
}

const MessageHeader: React.SFC<Props> = ({ author, time }) => (
  <Wrapper>
    <MessageAuthor author={author} />
    <MessageTimestamp time={time} />
  </Wrapper>
)

export default MessageHeader
