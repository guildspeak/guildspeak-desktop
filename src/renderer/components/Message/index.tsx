import * as React from 'react'
import marked from '../../utils/markdown'
import { MessageAuthorData } from '../MessageAuthor'
import MessageHeader from '../MessageHeader'
import {
  Wrapper,
  MessageBubble,
  MessageContent,
  Hr,
  DropdownButton,
  MessageContentWrapper
} from './styles'
import { DropdownMenu, Dropdown, DropdownItem } from '../Dropdown'

interface IProps {
  readonly content: string
  readonly author: MessageAuthorData
  readonly time: string
}

interface IState {
  hidden: boolean
}

class Message extends React.Component<IProps, IState> {
  state = { hidden: true }
  wrapperRef: any = React.createRef()

  setWrapperRef = node => {
    this.wrapperRef = node
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOpenCloseDropdown, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOpenCloseDropdown, false)
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

  render() {
    return (
      <Wrapper>
        <MessageBubble>
          <MessageHeader author={this.props.author} time={this.props.time} />
          <MessageContentWrapper>
            <MessageContent dangerouslySetInnerHTML={{ __html: marked(this.props.content) }} />
            <Dropdown ref={this.setWrapperRef}>
              <DropdownButton className="material-icons" onClick={this.handleOpenCloseDropdown}>
                more_vert
              </DropdownButton>
              <DropdownMenu hidden={this.state.hidden}>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem hoverColor="#ff3333">Remove</DropdownItem>
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
