/** 
  * @author rlot <rj23@protonmail.com>
  * @author alufers <alufers@wp.pl>
  * @author xdk78 <xdk78888@gmail.com>
  * @author Bjornskjald <github@bjorn.ml>
*/
import * as React from 'react'
import styled from 'styled-components'
import Channel from './Channel'
import { RouteProps } from 'react-router'

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

const Guild: React.SFC<Props & RouteProps> = ({ name, channels }) => (
  <Wrapper>
    <GuildName>{name}</GuildName>
    {channels.map(el => <Channel name={el.name} id={el.id} key={el.id} />)}
  </Wrapper>
)

export default Guild
