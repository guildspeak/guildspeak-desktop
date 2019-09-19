import React from 'react'
import { Wrapper, GuildWrapper, CurrentGuildSelector } from './styles'
import { withRouter, RouteComponentProps } from 'react-router-dom'

type Props = {
  name: string
  currentGuildId: string
  guildId: string
  defaultChannelId: string
  defaultChannelName: string
  setGuild: (guildId: string, guildName: string) => void
  setChannel: (channelId: string, channelName: string) => void
}

const Guild = ({
  name,
  guildId,
  currentGuildId,
  setGuild,
  defaultChannelId,
  defaultChannelName,
  setChannel,
  history
}: Props & RouteComponentProps) => {
  const changeGuild = () => {
    setGuild(guildId, name)
    setChannel(defaultChannelId, defaultChannelName)
    history.push(`/app/channel/${defaultChannelId}`)
  }

  return (
    <Wrapper>
      <GuildWrapper onClick={changeGuild} title={name}>
        {name.slice(0, 1)}
      </GuildWrapper>
      <CurrentGuildSelector guildId={guildId} currentGuildId={currentGuildId} />
    </Wrapper>
  )
}

export default withRouter(Guild)
