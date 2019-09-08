import React, { useEffect, useState, useCallback } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'
import {
  Wrapper,
  Username,
  FriendButton,
  InnerWrapper,
  UserWrapper,
  UserStatus,
  StyledModal
} from './styles'
import { RouteComponentProps } from 'react-router'
import Loading from '../Loading'
import Avatar from '../Avatar'

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

const CurrentUsers = ({ guildId }: IProps & RouteComponentProps) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [opacity, setOpacity] = useState<number>(0)
  const [selectedUser, setSelectedUser] = useState<string>('')

  const toggleModal = () => setOpen(!isOpen)
  const afterOpen = () => setOpacity(1)
  const beforeClose = () => setOpacity(0)
  const selectCurrentUser = (username: string) => () => setSelectedUser(username)

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.keyCode === 27 && isOpen) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false)
    return () => document.removeEventListener('keydown', handleEsc, false)
  }, [handleEsc])

  const { loading, error, data } = useQuery(GET_USERS, { variables: { id: guildId } })

  if (loading) return <Loading />
  if (error) return <div>Error! {error.message}</div>

  return (
    <Wrapper>
      <InnerWrapper>
        {data.guild.users.map(user => (
          <UserWrapper onClick={toggleModal} key={user.id}>
            <Avatar size={36}>{user.username.slice(0, 1)}</Avatar>
            <UserStatus status={user.status} />
            <Username onClick={selectCurrentUser(user.username)}>{user.username}</Username>
          </UserWrapper>
        ))}
        <StyledModal
          isOpen={isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          opacity={opacity}
        >
          <Avatar url="https://i.kym-cdn.com/entries/icons/facebook/000/021/950/Pink_guy.jpg" />
          <Username>{selectedUser}</Username>
          <FriendButton>Send Friend Request</FriendButton>
        </StyledModal>
      </InnerWrapper>
    </Wrapper>
  )
}
export default CurrentUsers
