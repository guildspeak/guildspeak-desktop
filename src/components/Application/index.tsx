import * as React from 'react'
import Sidebar from '../Sidebar'
import Messages from '../Messages'
import MessageInput from '../MessageInput'
import { Route, withRouter } from 'react-router-dom'
import { MainWrapper, MessagesColumn, LeftColumn, RightColumn } from './styles'

const renderMessages = (params) => {
  return (<Messages key={params.match.params.channelId} {...params } />)
}
const Application: React.SFC = () => (
  <MainWrapper>
    <LeftColumn>
      <Sidebar />
    </LeftColumn>
    <RightColumn>
      <MessagesColumn>
        <Route path='/channel/:channelId' render={renderMessages} />
        <MessageInput />
      </MessagesColumn>
    </RightColumn>
  </MainWrapper>
)

export default withRouter(Application as any)
