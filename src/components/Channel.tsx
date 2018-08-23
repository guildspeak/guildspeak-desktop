import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const ChannelName = styled.div`
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

