import * as React from 'react'
import marked from '../../utils/markdown'
import { MessageAuthorData } from '../MessageAuthor'
import MessageHeader from '../MessageHeader'
import { Wrapper, MessageBubble, MessageContent, Hr, DropdownButton, MessageContentWrapper } from './styles'
import { DropdownMenu, Dropdown, DropdownItem } from '../Dropdown'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const DELETE_MESSAGE = gql`
  mutation deleteMessage($messageId: ID!) {
    deleteMessage(messageId: $messageId) {
      id
    }
  }
`

interface IProps {
  readonly messageId: string
  readonly content: string
  readonly author: MessageAuthorData
  readonly time: string
  readonly mounted: () => any
  readonly willMount: () => any
}

interface IState {
  hidden: boolean
}

class Message extends React.Component<IProps, IState> {
  ref: React.RefObject<any> = React.createRef()
  state = { hidden: true }
  wrapperRef: any = React.createRef()

  componentWillMount() {
    this.props.willMount()
  }

  setWrapperRef = node => {
    this.wrapperRef = node
  }

  componentDidMount() {
    this.props.mounted()
    document.addEventListener('mousedown', this.handleOpenCloseDropdown, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOpenCloseDropdown, false)
  }

  doScroll = () => {
    console.log(this.ref.current.scrollTop)
  }

  handleOpenCloseDropdown = e => {
    if (this.wrapperRef && this.wrapperRef.contains(e.target)) {
      this.setState({
        hidden: false
      })
      return
    }

    this.setState({
      hidden: true
    })
  }

  handleDeleteMessage = deleteMessage => () => {
    deleteMessage({ variables: { messageId: this.props.messageId } })
  }

  render() {
    return (
      <Wrapper>
        <MessageBubble>
          <MessageHeader author={this.props.author} time={this.props.time} />
          <MessageContentWrapper>
            <MessageContent ref={this.ref} onScroll={this.doScroll} dangerouslySetInnerHTML={{ __html: marked(this.props.content) }} />
            <Dropdown innerRef={this.setWrapperRef}>
              <DropdownButton className="material-icons" onClick={this.handleOpenCloseDropdown}>
                more_vert
              </DropdownButton>
              <DropdownMenu hidden={this.state.hidden}>
                <DropdownItem>Edit</DropdownItem>
                <Mutation mutation={DELETE_MESSAGE}>
                  {deleteMessage => (
                    <DropdownItem hoverColor="#ff3333" onClick={this.handleDeleteMessage(deleteMessage)}>
                      Remove
                    </DropdownItem>
                  )}
                </Mutation>
              </DropdownMenu>
            </Dropdown>
          </MessageContentWrapper>
          <Hr aria-hidden="true" />
        </MessageBubble>
      </Wrapper>
    )
  }
}

export default Message
