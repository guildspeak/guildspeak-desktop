import React, { useState, useRef, useCallback, useEffect } from 'react'
import richMarkdown from '../../utils/markdown'
import { MessageAuthorData } from '../MessageAuthor'
import MessageHeader from '../MessageHeader'
import {
  Wrapper,
  MessageBubble,
  MessageContent,
  DropdownButton,
  MessageContentWrapper
} from './styles'
import { DropdownMenu, Dropdown, DropdownItem } from '../Dropdown'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

type Props = {
  messageId: string
  content: string
  author: MessageAuthorData
  time: string
}

const DELETE_MESSAGE = gql`
  mutation deleteMessage($messageId: ID!) {
    deleteMessage(messageId: $messageId) {
      id
    }
  }
`

const Message = ({ content, author, time, messageId }: Props) => {
  const [hidden, setHidden] = useState<boolean>(true)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [deleteMessage] = useMutation(DELETE_MESSAGE)

  const handleOpenCloseDropdown = useCallback(e => {
    if (wrapperRef && wrapperRef.current.contains(e.target)) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleOpenCloseDropdown, false)
    return () => document.removeEventListener('mousedown', handleOpenCloseDropdown, false)
  }, [handleOpenCloseDropdown])

  const handleDeleteMessage = messageIdToDelete => e => {
    deleteMessage({ variables: { messageId: messageIdToDelete } })
  }

  return (
    <Wrapper>
      <MessageBubble>
        <MessageHeader author={author} time={time} />
        <MessageContentWrapper>
          <MessageContent>{richMarkdown(content)}</MessageContent>
          <Dropdown ref={wrapperRef}>
            <DropdownButton className="material-icons" onClick={handleOpenCloseDropdown}>
              more_vert
            </DropdownButton>
            <DropdownMenu hidden={hidden}>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem hoverColor="#ff3333" onClick={handleDeleteMessage(messageId)}>
                Remove
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </MessageContentWrapper>
      </MessageBubble>
    </Wrapper>
  )
}

export default Message
