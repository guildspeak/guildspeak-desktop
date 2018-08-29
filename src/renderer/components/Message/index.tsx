import * as React from 'react'
import marked from '../../utils/markdown'
import { highlightAuto } from 'highlight.js'
import { MessageAuthorData } from '../MessageAuthor'
import MessageHeader from '../MessageHeader'
import { Wrapper, MessageBubble, MessageContent, Hr } from './styles'

interface IProps {
  content: string
  author: MessageAuthorData
  time: string
  mounted: () => any
  willMount: () => any
}

class Message extends React.Component<IProps, {}> {
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

  doScroll = () => {
    console.log(this.ref.current.scrollTop)
  }

  render() {
    return (
      <Wrapper>
        <MessageBubble>
          <MessageHeader author={this.props.author} time={this.props.time} />
          <MessageContent ref={this.ref} onScroll={this.doScroll} dangerouslySetInnerHTML={{ __html: marked(this.props.content) }} />
          <Hr aria-hidden="true" />
        </MessageBubble>
      </Wrapper>
    )
  }
}

export default Message
