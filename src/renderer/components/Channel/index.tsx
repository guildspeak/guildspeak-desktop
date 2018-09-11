import * as React from 'react'
import { withRouter, RouteProps, RouteComponentProps } from 'react-router-dom'
import { Wrapper, ChannelName, IconButton, Channels } from './styles'

interface IProps {
  readonly id: string
  readonly name: string
  readonly channelId: string
  readonly setChannelId: (channelId: string) => any
  readonly setChannelName: (channelName: string) => any
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
          <IconButton {...this.props} className="material-icons">
            settings
          </IconButton>
        </Channels>
      </Wrapper>
    )
  }
}

export default withRouter(Channel as any)
