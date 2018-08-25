import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Wrapper, Input } from './styles'

const CREATE_MESSAGE = gql`
  mutation createMessage($content: String!) {
    createMessage(content: $content, channelId: "cjl70pho0001008534qtvbqoy") {
      id
      content
    }
  }
`

interface IState {
  content?: string
}

class MessageInput extends React.Component<{}, IState> {
  state = {
    content: ''
  }

  handleSubmit(e, createMessage) {
    e.preventDefault()
    createMessage({ variables: { content: this.state.content } })
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
