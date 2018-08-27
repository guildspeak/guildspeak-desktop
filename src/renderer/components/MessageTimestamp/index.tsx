import * as React from 'react'
import { Wrapper } from './styles'
import dayjs from 'dayjs'

interface Props {
  time: string
}

const MessageTimestamp: React.SFC<Props> = ({ time }) => <Wrapper>{(dayjs as any)(time).fromNow()}</Wrapper>

export default MessageTimestamp
