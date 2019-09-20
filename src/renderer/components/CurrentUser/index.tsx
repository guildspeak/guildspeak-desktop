import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper, Username, Buttons, IconButton } from './styles'
import Status from '../Status'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Avatar from '../Avatar'
import { Center, Spinner } from '../shared'
import { isUserOnline } from '../../utils'
import dayjs from 'dayjs'

const GET_ME = gql`
  query {
    me {
      username
      lastSeen
    }
  }
`

const CurrentUser = ({ history }: RouteComponentProps) => {
  const handleSettings = () => {
    history.push('/settings')
  }

  const { loading, error, data } = useQuery(GET_ME)

  if (loading) {
    return (
      <Wrapper>
        <Center>
          <Spinner />
        </Center>
      </Wrapper>
    )
  }
  if (error) return <Center>Error! {error.message}</Center>

  return (
    <Wrapper>
      <Avatar>{data.me.username.slice(0, 1)}</Avatar>
      <Status isOnline={isUserOnline(data.me.lastSeen)} title={dayjs(data.me.lastSeen).fromNow()} />
      <Username>{data.me.username}</Username>
      <Buttons>
        <IconButton title="Settings" onClick={handleSettings} className="material-icons">
          settings
        </IconButton>
      </Buttons>
    </Wrapper>
  )
}

export default withRouter(CurrentUser)
