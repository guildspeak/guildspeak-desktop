import * as React from 'react'
import Sidebar from '../../components/Sidebar'
import Messages from '../../components/Messages'
import MessageInputContainer from '../../containers/MessageInputContainer'
import { Route, withRouter } from 'react-router-dom'
import {
  MainWrapper,
  MessagesColumn,
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  InnerWrapper
} from './styles'
import CurrentUsersContainer from '../../containers/CurrentUsersContainer'
import Guilds from '../../components/Guilds'

class Application extends React.Component<{ channelId: string; history: any }> {
  renderMessages = params => <Messages key={params.match.params.channelId} {...params} />

  componentDidMount() {
    this.props.history.push(`/app/channel/${this.props.channelId}`)
  }

  render() {
    return (
      <MainWrapper>
        <Guilds />
        <InnerWrapper>
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
            <CurrentUsersContainer />
          </ThirdColumn>
        </InnerWrapper>
      </MainWrapper>
    )
  }
}

export default withRouter(Application as any)
