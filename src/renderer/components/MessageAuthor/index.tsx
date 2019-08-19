import React, { useEffect, useState } from 'react'
import { Wrapper, StyledModal, FriendButton, UserName } from './styles'

export interface MessageAuthorData {
  id: string
  username: string
}

interface IProps {
  readonly author: MessageAuthorData
}

interface IState {
  isOpen: boolean
  opacity: number
}

const MessageAuthor = ({ author }: IProps) => {
  const [state, setState] = useState<IState>({
    isOpen: false,
    opacity: 0
  })

  const toggleModal = () => setState({ ...state, isOpen: !state.isOpen })

  const afterOpen = () => setState({ ...state, opacity: 1 })

  const beforeClose = () => {
    setState({ ...state, opacity: 0 })
  }

  return (
    <Wrapper>
      <div onClick={toggleModal}>{author.username}</div>
      <StyledModal
        isOpen={state.isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={state.opacity}
      >
        <UserName>{author.username}</UserName>
        <FriendButton>Send Friend Request</FriendButton>
      </StyledModal>
    </Wrapper>
  )
}

export default MessageAuthor
