import React, { useEffect, useState, useCallback } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'
import {
  Wrapper,
  Username,
  StyledModal,
  FriendButton,
  UserName,
  Avatar,
  InnerWrapper
} from './styles'
import { RouteComponentProps } from 'react-router'
import Loading from '../Loading'

const GET_USERS = gql`
  query guild($id: ID!) {
    guild(id: $id) {
      id
      users {
        id
        username
      }
    }
  }
`
interface IProps {
  readonly guildId: string
}

interface IState {
  isOpen: boolean
  opacity: number
  selectedUser: string
}

const CurrentUsers = ({ guildId }: IProps & RouteComponentProps) => {
  const [state, setState] = useState<IState>({
    isOpen: false,
    opacity: 0,
    selectedUser: ''
  })

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.keyCode === 27 && this.state.isOpen) {
      setState({ ...state, isOpen: false })
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false)
    return () => document.removeEventListener('keydown', handleEsc, false)
  }, [handleEsc])

  const toggleModal = () => {
    setState({ ...state, isOpen: !state.isOpen })
  }

  const selectCurrentUser = (username: string) => () => {
    setState({ ...state, selectedUser: username })
  }

  const afterOpen = () => {
    setState({ ...state, opacity: 1 })
  }

  const beforeClose = () => {
    setState({ ...state, opacity: 0 })
  }

  const { loading, error, data } = useQuery(GET_USERS, { variables: { id: guildId } })

  if (loading) return <Loading />
  if (error) return <div>Error! {error.message}</div>

  return (
    <Wrapper>
      <div>Members</div>
      <InnerWrapper>
        {data.guild.users.map(el => (
          <div onClick={toggleModal} key={el.id}>
            <Username onClick={selectCurrentUser(el.username)}>{el.username}</Username>
          </div>
        ))}
        <StyledModal
          isOpen={state.isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          opacity={state.opacity}
        >
          <Avatar>
            <img src="https://i.kym-cdn.com/entries/icons/facebook/000/021/950/Pink_guy.jpg" />
          </Avatar>
          <UserName>{state.selectedUser}</UserName>
          <FriendButton>Send Friend Request</FriendButton>
        </StyledModal>
      </InnerWrapper>
    </Wrapper>
  )
}
export default CurrentUsers
