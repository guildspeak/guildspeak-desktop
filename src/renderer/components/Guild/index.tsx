import React from 'react'
import { Wrapper } from './styles'
import { withRouter, RouteComponentProps } from 'react-router-dom'

type Props = {
  name: string
  guildId: string
  defaultChannelId: string
  setGuildId: (guildId: string) => void
  setChannelId: (guildId: string) => void
}

const Guild = ({
  name,
  guildId,
  setGuildId,
  defaultChannelId,
  setChannelId,
  history
}: Props & RouteComponentProps) => {
  const changeGuild = () => {
    setGuildId(guildId)
    setChannelId(defaultChannelId)
    history.push(`/app/channel/${defaultChannelId}`)
  }

  return (
    <Wrapper onClick={changeGuild} title={name}>
      {name.slice(0, 1)}
    </Wrapper>
  )
}

export default withRouter(Guild)
