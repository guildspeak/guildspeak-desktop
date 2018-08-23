import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const ChannelName = styled.div`
  padding: 4px;
  color: #eeeeee;
  &:hover {
    color: #fff;
    background: rgba(255,255,255,0.24);
  }
  cursor: pointer;
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

