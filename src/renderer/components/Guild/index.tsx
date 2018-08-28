import * as React from 'react'
import { RouteProps } from 'react-router'
import { Wrapper, GuildName } from './styles'

interface Props {
  name: string
}

const Guild: React.SFC<Props & RouteProps> = ({ name }) => (
  <Wrapper>
    <GuildName>{name}</GuildName>
  </Wrapper>
)

export default Guild
