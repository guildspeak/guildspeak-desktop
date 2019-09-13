import React from 'react'
import { Wrapper } from './styles'
import dayjs from 'dayjs'

type Props = {
  time: string
}

const MessageTimestamp = ({ time }: Props) => (
  <Wrapper title={dayjs(time).toString()}>{dayjs(time).fromNow()}</Wrapper>
)

export default MessageTimestamp
