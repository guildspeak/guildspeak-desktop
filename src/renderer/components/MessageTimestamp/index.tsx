import * as React from 'react'
import { Wrapper } from './styles'
import dayjs from 'dayjs'

interface IProps {
  readonly time: string
}

const MessageTimestamp = ({ time }: IProps) => <Wrapper>{dayjs(time).fromNow()}</Wrapper>

export default MessageTimestamp
