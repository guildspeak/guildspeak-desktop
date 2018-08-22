import * as React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'react-rasta'
const Wrapper = styled(Container)`
`
export interface MessageAuthorData {
  id: string,
  username: string
}

interface Props {
  author: MessageAuthorData
}

const MessageAuthor: React.SFC<Props> = ({ author }) => (
  <Wrapper>
    {author.username}:
  </Wrapper>
)

export default MessageAuthor
