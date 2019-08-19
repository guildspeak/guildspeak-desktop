import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper, ChannelName, IconButton, Channels } from './styles'

interface IProps {
  readonly id: string
  readonly name: string
  readonly channelId: string
  readonly setChannelId: (channelId: string) => any
  readonly setChannelName: (channelName: string) => any
}

const Channel = ({ id, name, channelId, history, setChannelId }: RouteComponentProps & IProps) => {
  const changeChannel = () => {
    setChannelId(id)
    history.push(`/app/channel/${id}`)
  }

  return (
    <Wrapper>
      <Channels id={id} channelId={channelId}>
        <ChannelName onClick={changeChannel}>#{name}</ChannelName>
        <IconButton id={id} channelId={channelId} className="material-icons">
          settings
        </IconButton>
      </Channels>
    </Wrapper>
  )
}

export default withRouter(Channel)
