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

interface Props {
  name: string
  channels: any[]
}

const Guild: React.SFC<Props> = ({ name, channels }) => (
  <Wrapper>
    <GuildName>{name}</GuildName>
    {channels.map(el => <Channel name={el.name} key={el.id} />)}
  </Wrapper>
)

export default Guild

