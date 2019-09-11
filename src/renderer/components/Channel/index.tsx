import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper, ChannelName, IconButton } from './styles'

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
    setChannelId(currentChannelId)
    history.push(`/app/channel/${currentChannelId}`)
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
