import React, { useEffect, useState, useCallback } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import {
  Wrapper,
  Username,
  InnerWrapper,
  UserWrapper,
  UserStatus,
  StyledModal,
  ProcessName,
  TextWrapper,
  CurrentGuildWrapper
} from './styles'
import { RouteComponentProps } from 'react-router'
import Avatar from '../Avatar'
import { Center, Spinner } from '../shared'
import { ipcRenderer } from 'electron'
import { LOAD_RUNNING_PROCESSES, BackgroundProcess } from '../../../ipc'
import { isUserOnline } from '../../utils'
import dayjs from 'dayjs'

type Props = {
  guildId: string
  guildName: string
}

const GET_USERS = gql`
  query guild($id: ID!) {
    guild(id: $id) {
      id
      users {
        id
        username
        lastSeen
      }
    }
  }
`

const CurrentUsers = ({ guildId, guildName }: Props & RouteComponentProps) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [opacity, setOpacity] = useState<number>(0)
  const [selectedUser, setSelectedUser] = useState<string>('')
  const [activity, setActivity] = useState<string>('')

  const toggleModal = () => setOpen(!isOpen)
  const afterOpen = () => setOpacity(1)
  const beforeClose = () => setOpacity(0)
  const selectCurrentUser = (username: string) => () => setSelectedUser(username)

  const handleMessage = (_event, args: BackgroundProcess[]) => {
    if (args && args.length > 0) {
      const backgroundProcessName = args[0].sessionName
      const backgroundProcessType = args[0].type
      let currentActivity = ''
      switch (backgroundProcessType) {
        default:
        case 'other':
          currentActivity = `Doing cool stuff in ${backgroundProcessName}`
          break
        case 'game':
          currentActivity = `Playing ${backgroundProcessName}`
          break
        case 'music':
          currentActivity = `Listening to ${backgroundProcessName}`
          break
      }

      setActivity(currentActivity)
    }
  }

  useEffect(() => {
    ipcRenderer.send(LOAD_RUNNING_PROCESSES)
    ipcRenderer.on(LOAD_RUNNING_PROCESSES, handleMessage)

    return () => ipcRenderer.removeListener(LOAD_RUNNING_PROCESSES, handleMessage)
  }, [])

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
      <CurrentGuildWrapper>
        {guildName}
        <div className="material-icons">expand_more</div>
      </CurrentGuildWrapper>
      <InnerWrapper>
        {data.guild.users.map(user => (
          <UserWrapper onClick={toggleModal} key={user.id}>
            <Avatar size={36}>{user.username.slice(0, 1)}</Avatar>
            <UserStatus
              isOnline={isUserOnline(user.lastSeen)}
              title={dayjs(user.lastSeen).fromNow()}
            />
            <TextWrapper>
              <Username onClick={selectCurrentUser(user.username)}>
                <span>{user.username}</span>
              </Username>
              <ProcessName>
                <span title={activity}>{activity}</span>
              </ProcessName>
            </TextWrapper>
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
