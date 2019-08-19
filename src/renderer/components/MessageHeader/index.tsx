import * as React from 'react'
import MessageAuthor, { MessageAuthorData } from '../MessageAuthor'
import MessageTimestamp from '../MessageTimestamp'
import { Wrapper } from './styles'

interface IProps {
  readonly author: MessageAuthorData
  readonly time: string
}

const MessageHeader = ({ author, time }: IProps) => (
  <Wrapper>
    <MessageAuthor author={author} />
    <MessageTimestamp time={time} />
  </Wrapper>
)

export default MessageHeader
