import * as React from 'react'
import { withRouter, RouteProps, RouteComponentProps } from 'react-router-dom'
import { Wrapper, ChannelName } from './styles'

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
        <ChannelName {...this.props} onClick={this.changeChannel}>
          #{this.props.name}
        </ChannelName>
      </Wrapper>
    )
  }
}

export default withRouter(Channel as any)
