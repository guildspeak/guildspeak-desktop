import * as React from 'react'
import { Wrapper } from './styles'

export interface MessageAuthorData {
  id: string,
  username: string
}

interface Props {
  author: MessageAuthorData
}

const MessageAuthor: React.SFC<Props> = ({ author }) => (
  <Wrapper>
    @{author.username}
  </Wrapper>
)

export default MessageAuthor
