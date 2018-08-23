import * as React from 'react'
import styled from 'styled-components'
import Channel from './Channel'

const Wrapper = styled.div`
`

const GuildName = styled.div`
  padding: 4px;
  color: #eeeeee;
  &:hover {
    color: #fff;
  }
  cursor: pointer;
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
  channels: any[]
}

const Guild: React.SFC<Props> = ({ name, channels }) => (
  <Wrapper>
    <GuildName>{name}</GuildName>
    <ChannelName>{channels.map(el => <Channel name={el.name} key={el.id}></Channel>)}</ChannelName>
  </Wrapper>
)

export default Guild

