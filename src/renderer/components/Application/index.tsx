import * as React from 'react'
import Sidebar from '../Sidebar'
import Messages from '../Messages'
import CurrentUser from '../CurrentUser'
import MessageInputContainer from '../../containers/MessageInputContainer'
import { Route, withRouter } from 'react-router-dom'
import { MainWrapper, MessagesColumn, LeftColumn, RightColumn } from './styles'

class Application extends React.PureComponent<{ channelId: string, history: any }> {
  renderMessages = (params) => {
    return (<Messages key={params.match.params.channelId} {...params } />)
  }

  componentDidMount() {
    this.props.history.push(`/app/channel/${this.props.channelId}`)
  }

  render() {
    return (<MainWrapper>
      <LeftColumn>
        <Sidebar />
      </LeftColumn>
      <RightColumn>
        <MessagesColumn>
          <Route path='/app/channel/:channelId' render={this.renderMessages} />
          <MessageInputContainer />
        </MessagesColumn>
      </RightColumn>
    </MainWrapper>)
  }
}

export default withRouter(Application as any)
