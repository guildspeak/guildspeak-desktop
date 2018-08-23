import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  &:hover {
    color: #149f98;
  }
  cursor: pointer;
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
    @{author.username}
  </Wrapper>
)

export default MessageAuthor
