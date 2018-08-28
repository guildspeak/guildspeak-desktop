import * as React from 'react'
import Sidebar from '../Sidebar'
import Messages from '../Messages'
import MessageInputContainer from '../../containers/MessageInputContainer'
import { Route, withRouter } from 'react-router-dom'
import { MainWrapper, MessagesColumn, FirstColumn, SecondColumn, ThirdColumn, InnerWrapper } from './styles'
import Users from '../Users'
import GuildsContainer from '../../containers/GuildsContainer'

class Application extends React.Component<{ channelId: string; history: any }> {
  renderMessages = params => <Messages key={params.match.params.channelId} {...params} />

  componentDidMount() {
    this.props.history.push(`/app/channel/${this.props.channelId}`)
  }

  render() {
    return (
      <MainWrapper>
        <GuildsContainer />
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
            <Users />
          </ThirdColumn>
        </InnerWrapper>
      </MainWrapper>
    )
  }
}

export default withRouter(Application as any)
