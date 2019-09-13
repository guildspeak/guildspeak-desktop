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

type Props = {
  content: string
  author: MessageAuthorData
  time: string
}

const Message = ({ content, author, time }: Props) => {
  const [hidden, setHidden] = useState<boolean>(true)
  const wrapperRef = useRef<HTMLDivElement>(null)

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
              <DropdownItem hoverColor="#ff3333">Remove</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </MessageContentWrapper>
        {/* <Divider /> */}
      </MessageBubble>
    </Wrapper>
  )
}

export default Message
