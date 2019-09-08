import React from 'react'
import { Wrapper } from './styles'
import dayjs from 'dayjs'

type Props = {
  time: string
}

const MessageTimestamp = ({ time }: Props) => <Wrapper>{dayjs(time).fromNow()}</Wrapper>

export default MessageTimestamp
