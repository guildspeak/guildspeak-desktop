import * as React from 'react'
import Input from './Input'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Button from './Button'

const CREATE_MESSAGE = gql`
  mutation createMessage($content: String!) {
    createMessage(content: $content, channelId: "cjl5gmgip00ga0a18hhttuvan") {
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

  handleSubmit = (e, createMessage) => {
    e.preventDefault()
    createMessage({ variables: { content: this.state.content } })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ content: e.target.value })
  }

  render() {
    return (
      <Mutation mutation={CREATE_MESSAGE}>
        {(createMessage, { data }) => (
          <div>
            <form
              onSubmit={(e) => this.handleSubmit(e, createMessage)}
            >
              <Input placeholder="Write message..." onChange={this.handleChange} />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        )}
      </Mutation>
    )
  }
}

export default MessageInput
