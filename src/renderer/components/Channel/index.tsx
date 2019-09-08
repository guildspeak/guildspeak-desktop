import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper, ChannelName, IconButton } from './styles'

type IProps = {
  id: string
  name: string
  channelId: string
  setChannelId: (channelId: string) => any
  setChannelName: (channelName: string) => any
}

const Channel = ({ id, name, channelId, history, setChannelId }: RouteComponentProps & IProps) => {
  const changeChannel = () => {
    setChannelId(id)
    history.push(`/app/channel/${id}`)
  }

  return (
    <Wrapper id={id} channelId={channelId} onClick={changeChannel}>
      <ChannelName>{name}</ChannelName>
      {/* <IconButton id={id} channelId={channelId} className="material-icons">
        expand_more
      </IconButton> */}
    </Wrapper>
  )
}

export default withRouter(Channel)
