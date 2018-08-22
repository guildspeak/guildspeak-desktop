import * as React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'react-rasta'

const Wrapper = styled(Container)`
`

interface Props {
  content: string
}

const Message: React.SFC<Props> = ({ content }) => (
  <Wrapper>
    <Row>{content}</Row>
  </Wrapper>
)

export default Message

