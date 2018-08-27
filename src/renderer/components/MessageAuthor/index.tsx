import * as React from 'react'
import { Wrapper, StyledModal, FriendButton, UserName, Avatar } from './styles'

export interface MessageAuthorData {
  id: string
  username: string
}

interface Props {
  author: MessageAuthorData
}

class MessageAuthor extends React.Component<Props, { isOpen: boolean; opacity: number }> {
  state = {
    isOpen: false,
    opacity: 0
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  afterOpen = () => {
    setTimeout(() => {
      this.setState({ opacity: 1 })
    })
  }

  beforeClose = () => {
    return new Promise(resolve => {
      this.setState({ opacity: 0 })
      setTimeout(resolve, 200)
    })
  }

  render() {
    return (
      <Wrapper>
        <div onClick={this.toggleModal}>{this.props.author.username}</div>
        <StyledModal
          isOpen={this.state.isOpen}
          afterOpen={this.afterOpen}
          beforeClose={this.beforeClose}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
          opacity={this.state.opacity}
        >
          <Avatar>
            <img src="https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg" />
          </Avatar>
          <UserName>{this.props.author.username}</UserName>
          <FriendButton>Send Friend Request</FriendButton>
        </StyledModal>
      </Wrapper>
    )
  }
}

export default MessageAuthor
