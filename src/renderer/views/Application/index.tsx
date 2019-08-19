import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import Messages from '../../components/Messages'
import MessageInputContainer from '../../containers/MessageInputContainer'
import { Route, withRouter, RouteComponentProps } from 'react-router-dom'
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

const renderMessages = params => <Messages key={params.match.params.channelId} {...params} />

const Application = ({ channelId, history }: RouteComponentProps & { channelId: string }) => {
  useEffect(() => {
    history.push(`/app/channel/${channelId}`)
  }, [])

  return (
    <MainWrapper>
      <Guilds />
      <InnerWrapper>
        <FirstColumn>
          <Sidebar />
        </FirstColumn>
        <SecondColumn>
          <MessagesColumn>
            <Route path="/app/channel/:channelId" render={renderMessages} />
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

export default withRouter(Application)
