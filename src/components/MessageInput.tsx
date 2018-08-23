import * as React from 'react'
import Input from './Input'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  justify-content: center;
  height: 24px;
  margin-top: 24px;
  margin-right: 28px;
  margin-bottom: 56px;
`

const CREATE_MESSAGE = gql`
  mutation createMessage($content: String!) {
    createMessage(content: $content, channelId: "cjl6t7x540018086233kbwcz3") {
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
              onSubmit={(e) => this.handleSubmit(e, createMessage)}
            >
              <Input placeholder="write message..." value={this.state.content} onChange={this.handleChange} />
              {/* <Button type="submit">Submit</Button> */}
            </form>
          )}
        </Mutation>
      </Wrapper>
    )

  }
}

export default MessageInput
