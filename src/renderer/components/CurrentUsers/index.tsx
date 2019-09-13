import React, { useEffect, useState, useCallback } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Wrapper, Username, InnerWrapper, UserWrapper, UserStatus, StyledModal } from './styles'
import { RouteComponentProps } from 'react-router'
import Avatar from '../Avatar'
import { Center, Spinner } from '../shared'

type Props = {
  guildId: string
}

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

const CurrentUsers = ({ guildId }: Props & RouteComponentProps) => {
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
          <Username>{selectedUser}</Username>
        </StyledModal>
      </InnerWrapper>
    </Wrapper>
  )
}
export default CurrentUsers
