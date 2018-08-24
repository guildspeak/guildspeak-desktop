import * as React from 'react'
import { Wrapper } from './styles'

interface Props {
  time: string
}

const MessageTimestamp: React.SFC<Props> = ({ time }) => (
  <Wrapper>
    {time.replace('T', ' ').split('.')[0]}
  </Wrapper>
)

export default MessageTimestamp
