import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Wrapper, Input } from './styles'
import { EditorState, Editor, DraftHandleValue } from 'draft-js'
import '../../../../node_modules/draft-js/dist/Draft.css'

const CREATE_MESSAGE = gql`
  mutation createMessage($content: String!, $channelId: ID!) {
    createMessage(content: $content, channelId: $channelId) {
      id
      content
    }
  }
`

interface IState {
  editorState: EditorState
  content: string
}

interface Props {
  channelId: string
}

class MessageInput extends React.Component<Props, IState> {
  state = {
    editorState: EditorState.createEmpty(),
    content: ''
  }

  handleReturn(createMessage): DraftHandleValue {
    const content = this.state.editorState.getCurrentContent().getPlainText()
    this.setState({
      content
    })
    createMessage({ variables: { content, channelId: this.props.channelId } })
    this.setState({
      content: '',
      editorState: EditorState.createEmpty()
    })
    return 'handled'
  }

  handleChange = editorState => {
    this.setState({ editorState })
  }

  render() {
    return (
      <Wrapper>
        <Mutation mutation={CREATE_MESSAGE}>
          {createMessage => (
            <Input>
              <Editor
                placeholder="write message..."
                editorState={this.state.editorState}
                onChange={this.handleChange}
                // tslint:disable-next-line:jsx-no-lambda
                handleReturn={() => this.handleReturn(createMessage)}
              />
            </Input>
          )}
        </Mutation>
      </Wrapper>
    )
  }
}

export default MessageInput
