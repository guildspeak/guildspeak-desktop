import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper, ChannelName } from './styles'

type IProps = {
  currentChannelId: string
  name: string
  channelId: string
  setChannelId: (channelId: string) => any
  setChannelName: (channelName: string) => any
}

const Channel = ({
  currentChannelId,
  name,
  channelId,
  history,
  setChannelId
}: RouteComponentProps & IProps) => {
  const changeChannel = () => {
    setChannelId(channelId)
    history.push(`/app/channel/${channelId}`)
  }

  return (
    <Wrapper currentChannelId={currentChannelId} channelId={channelId} onClick={changeChannel}>
      <ChannelName>{name}</ChannelName>
      {/* <IconButton currentChannelId={currentChannelId} channelId={channelId} className="material-icons">
        expand_more
      </IconButton> */}
    </Wrapper>
  )
}

export default withRouter(Channel)
