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

const Application = ({
  channelId,
  guildId,
  history
}: RouteComponentProps & { channelId: string; guildId: string }) => {
  useEffect(() => {
    if (guildId && channelId) {
      history.push(`/app/channel/${channelId}`)
    }
  }, [channelId])

  return (
    <MainWrapper>
      <Guilds />
      {guildId && channelId ? (
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
          <ThirdColumn>{guildId && channelId && <CurrentUsersContainer />}</ThirdColumn>
        </InnerWrapper>
      ) : (
        <InnerWrapper>Create or select Guild</InnerWrapper>
      )}
    </MainWrapper>
  )
}

export default withRouter(Application)
