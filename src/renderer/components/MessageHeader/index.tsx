import React from 'react'
import MessageAuthor, { MessageAuthorData } from '../MessageAuthor'
import MessageTimestamp from '../MessageTimestamp'
import { Wrapper } from './styles'

type Props = {
  author: MessageAuthorData
  time: string
}

const MessageHeader = ({ author, time }: Props) => (
  <Wrapper>
    <MessageAuthor author={author} />
    <MessageTimestamp time={time} />
  </Wrapper>
)

export default MessageHeader
