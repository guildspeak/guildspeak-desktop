import * as React from 'react'
import styled from 'styled-components'
import { MessageAuthorData } from './MessageAuthor'
import MessageHeader from './MessageHeader'

const Wrapper = styled.div`
 flex: 1;
`
const MessageBubble = styled.div`
  flex: 1;
  height: auto;
  word-break: break-all;
`
const MessageContent= styled.p`
  padding-right: 8px;
`

interface Props {
  content: string
  author: MessageAuthorData
  time: string
  mounted: () => any
  willMount: () => any
}

class Message extends React.Component<Props, {}> {
  ref: React.RefObject<any>
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentWillMount() {
    this.props.willMount()
  }

  componentDidMount() {
    this.props.mounted()
  }

  doScroll = (e) => {
    console.log(
    this.ref.current.scrollTop)
  }
  render() {
    return (<Wrapper >
      <MessageBubble>
      <MessageHeader author={this.props.author} time={this.props.time} />
      <MessageContent ref={this.ref} onScroll={ this.doScroll }>{this.props.content}</MessageContent>
      </MessageBubble>
    </Wrapper>)
  }
}

export default Message
