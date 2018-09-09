import * as React from 'react'
import { withRouter, RouteProps, RouteComponentProps } from 'react-router-dom'
import { Wrapper, ChannelName, Button, Channels } from './styles'

interface IProps {
  id: string
  name: string
  channelId: any
  setChannelId: (channelId) => any
}

class Channel extends React.Component<IProps & RouteComponentProps<RouteProps>> {
  changeChannel = () => {
    this.props.setChannelId(this.props.id)
    this.props.history.push(`/app/channel/${this.props.id}`)
  }

  render() {
    return (
      <Wrapper>
        <Channels {...this.props}>
          <ChannelName onClick={this.changeChannel}>#{this.props.name}</ChannelName>
          <Button className="material-icons">more_vert</Button>
        </Channels>
      </Wrapper>
    )
  }
}

export default withRouter(Channel as any)
