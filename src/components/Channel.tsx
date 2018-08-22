import * as React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'react-rasta'

const Wrapper = styled(Container)`
`

const ChannelName = styled(Row)`
  padding: 5px;
`

interface Props {
  name: string
}

const Channel: React.SFC<Props> = ({ name }) => (
  <Wrapper>
    <ChannelName>#{name}</ChannelName>
  </Wrapper>
)

export default Channel

