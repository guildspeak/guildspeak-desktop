import * as React from 'react'
import Sidebar from '../Sidebar'
import Messages from '../Messages'
import MessageInputContainer from '../../containers/MessageInputContainer'
import { Route, withRouter } from 'react-router-dom'
import { MainWrapper, MessagesColumn, FirstColumn, SecondColumn, ThirdColumn } from './styles'
import Users from '../Users'

class Application extends React.PureComponent<{ channelId: string; history: any }> {
  renderMessages = params => <Messages key={params.match.params.channelId} {...params} />

  componentDidMount() {
    this.props.history.push(`/app/channel/${this.props.channelId}`)
  }

  render() {
    return (
      <MainWrapper>
        <FirstColumn>
          <Sidebar />
        </FirstColumn>
        <SecondColumn>
          <MessagesColumn>
            <Route path="/app/channel/:channelId" render={this.renderMessages} />
            <MessageInputContainer />
          </MessagesColumn>
        </SecondColumn>
        <ThirdColumn>
          <Users />
        </ThirdColumn>
      </MainWrapper>
    )
  }
}

export default withRouter(Application as any)
