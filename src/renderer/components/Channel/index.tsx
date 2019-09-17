import React, { useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper, ChannelName } from './styles'

type IProps = {
  currentChannelId: string
  name: string
  channelId: string
  setChannel: (channelId: string, channelName: string) => void
}

const Channel = ({
  currentChannelId,
  name,
  channelId,
  history,
  setChannel
}: RouteComponentProps & IProps) => {
  const changeChannel = () => {
    setChannel(channelId, name)
    history.push(`/app/channel/${channelId}`)
  }

  return (
    <Wrapper currentChannelId={currentChannelId} channelId={channelId} onClick={changeChannel}>
      <ChannelName>{name}</ChannelName>
    </Wrapper>
  )
}

export default withRouter(Channel)
