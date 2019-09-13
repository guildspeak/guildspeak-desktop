import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper, Username, Buttons, IconButton } from './styles'
import Status from '../Status'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Avatar from '../Avatar'
import { Center, Spinner } from '../shared'

const GET_ME = gql`
  query {
    me {
      username
      status
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
      <Status status={data.me.status} />
      <Username>{data.me.username}</Username>
      <Buttons>
        <IconButton onClick={handleSettings} className="material-icons">
          settings
        </IconButton>
      </Buttons>
    </Wrapper>
  )
}

export default withRouter(CurrentUser)
