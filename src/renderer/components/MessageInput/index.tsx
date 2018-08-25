import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Wrapper, Input } from './styles'

const CREATE_MESSAGE = gql`
  mutation createMessage($content: String!, $channelId: ID!) {
    createMessage(content: $content, channelId: $channelId) {
      id
      content
    }
  }
`

interface IState {
  content?: string
}

interface Props {
  channelId: string
}

class MessageInput extends React.PureComponent<Props, IState> {
  state = {
    content: ''
  }

  handleSubmit(e, createMessage) {
    e.preventDefault()
    createMessage({ variables: { content: this.state.content, channelId: this.props.channelId } })
    this.setState({ content: '' })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ content: e.target.value })
  }

  render() {
    return (
      <Wrapper>
        <Mutation mutation={CREATE_MESSAGE}>
          {(createMessage, { data }) => (

            <form
              // tslint:disable-next-line:jsx-no-lambda
              onSubmit={(e) => this.handleSubmit(e, createMessage)}
            >
              <Input placeholder="write message..." value={this.state.content} onChange={this.handleChange} />
            </form>
          )}
        </Mutation>
      </Wrapper>
    )

  }
}

export default MessageInput
