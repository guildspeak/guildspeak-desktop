import * as React from 'react'
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

class MessageAuthor extends React.Component<IProps, IState> {
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
          <UserName>{this.props.author.username}</UserName>
          <FriendButton>Send Friend Request</FriendButton>
        </StyledModal>
      </Wrapper>
    )
  }
}

export default MessageAuthor
