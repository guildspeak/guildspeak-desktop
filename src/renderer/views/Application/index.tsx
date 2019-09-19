import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import Messages from '../../components/Messages'
import { Route, withRouter, RouteComponentProps } from 'react-router-dom'
import { MainWrapper, SecondColumn, ThirdColumn, Row, TopWrapper } from './styles'
import CurrentUsersContainer from '../../containers/CurrentUsersContainer'
import Guilds from '../../components/Guilds'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import dayjs from 'dayjs'

const UPDATE_USER_STATUS = gql`
  mutation updateUserStatus($lastSeen: DateTime!) {
    updateUserStatus(lastSeen: $lastSeen) {
      lastSeen
    }
  }
`

const renderMessages = params => (
  // @ts-ignore
  <Messages key={params.match.params.channelId} channelId={params.match.params.channelId} />
)

const Application = ({
  channelId,
  guildId,
  history
}: RouteComponentProps & { channelId: string; guildId: string }) => {
  const [updateUserStatus] = useMutation(UPDATE_USER_STATUS)

  useEffect(() => {
    if (guildId && channelId) {
      history.push(`/app/channel/${channelId}`)
    }
  }, [channelId])

  const updateStatus = () => {
    if (!document.hidden && document.visibilityState === 'visible' && navigator.onLine) {
      updateUserStatus({ variables: { lastSeen: dayjs().toISOString() } })
    }
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', updateStatus)
    return () => document.removeEventListener('visibilitychange', updateStatus)
  }, [updateStatus])

  return (
    <MainWrapper>
      <TopWrapper>
        <Guilds />
      </TopWrapper>
      {guildId && channelId ? (
        <Row>
          <Sidebar />
          <SecondColumn>
            <Route path="/app/channel/:channelId" render={renderMessages} />
          </SecondColumn>
          <ThirdColumn>{guildId && channelId && <CurrentUsersContainer />}</ThirdColumn>
        </Row>
      ) : (
        <Row>Create or select Guild</Row>
      )}
    </MainWrapper>
  )
}

export default withRouter(Application)
