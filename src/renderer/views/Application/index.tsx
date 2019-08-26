import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import Messages from '../../components/Messages'
import MessageInputContainer from '../../containers/MessageInputContainer'
import { Route, withRouter, RouteComponentProps } from 'react-router-dom'
import { MainWrapper, FirstColumn, SecondColumn, ThirdColumn, Column, Row } from './styles'
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
        <Column>
          <Row>
            <Sidebar />
            <SecondColumn>
              <Route path="/app/channel/:channelId" render={renderMessages} />
            </SecondColumn>
            <ThirdColumn>{guildId && channelId && <CurrentUsersContainer />}</ThirdColumn>
          </Row>
        </Column>
      ) : (
        <Row>Create or select Guild</Row>
      )}
    </MainWrapper>
  )
}

export default withRouter(Application)
