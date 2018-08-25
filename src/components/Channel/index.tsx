import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { Wrapper, ChannelName } from './styles'

interface Props {
  id: string
  name: string
  history: any
  match: any
  setChannelId: (channelId) => any
}


class Channel extends React.PureComponent<Props> {
  changeChannel = e => {
    this.props.setChannelId(this.props.id)
    this.props.history.push(`/app/channel/${ this.props.id }`)
  }

  render() {
    return (
    <Wrapper>
      <ChannelName onClick={ this.changeChannel }>#{this.props.name}</ChannelName>
    </Wrapper>)
  }
}

export default withRouter(Channel as any)
