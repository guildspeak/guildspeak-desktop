import * as React from 'react'
import { Wrapper } from './styles'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IProps {
  readonly name: string
  readonly guildId: string
  readonly defaultChannelId: string
  readonly setGuildId: (guildId: string) => void
  readonly setChannelId: (guildId: string) => void
}

const Guild = ({
  name,
  guildId,
  setGuildId,
  defaultChannelId,
  setChannelId,
  history
}: IProps & RouteComponentProps) => {
  const changeGuild = () => {
    setGuildId(guildId)
    setChannelId(defaultChannelId)
    history.push(`/app/channel/${defaultChannelId}`)
  }

  return (
    <Wrapper onClick={changeGuild} title={name}>
      {name.slice(1, 2)}
    </Wrapper>
  )
}

export default withRouter(Guild)
