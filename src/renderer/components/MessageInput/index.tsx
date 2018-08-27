import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Wrapper, Input } from './styles'
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'
import { EditorState, DraftHandleValue, ContentState } from 'draft-js'
import 'draft-js/dist/Draft.css'
import createSingleLinePlugin from 'draft-js-single-line-plugin'
import createEmojiPlugin from 'draft-js-emoji-plugin'
import 'draft-js-emoji-plugin/lib/plugin.css'

const singleLinePlugin = createSingleLinePlugin()
const emojiPlugin = createEmojiPlugin({
  useNativeArt: true
})

const { EmojiSelect, EmojiSuggestions } = emojiPlugin
const plugins = [emojiPlugin]

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

const StyledEmojiSuggestions = {}

class MessageInput extends React.PureComponent<Props, IState> {
  state = {
    editorState: createEditorStateWithText(''),
    content: ''
  }

  handleReturn(createMessage): DraftHandleValue {
    const content = this.state.editorState
      .getCurrentContent()
      .getPlainText()
      .trim()
    if (content && content.length > 0) {
      this.setState({
        content
      })
      createMessage({ variables: { content, channelId: this.props.channelId } })
      const newEditorState = EditorState.push(this.state.editorState, ContentState.createFromText(''), "remove-range")

      this.setState({
        content: '',
        editorState: EditorState.moveFocusToEnd(newEditorState)
      })
      return 'handled'
    }
  }

  handleChange = editorState => {
    this.setState({ editorState })
  }

  render() {
    return (
      <Mutation mutation={CREATE_MESSAGE}>
        {createMessage => (
          <Wrapper>
            <Input>
              <Editor
                plugins={plugins}
                placeholder="write message..."
                editorState={this.state.editorState}
                onChange={this.handleChange}
                // tslint:disable-next-line:jsx-no-lambda
                handleReturn={() => this.handleReturn(createMessage)}
              />
              <EmojiSuggestions style={StyledEmojiSuggestions} />
            </Input>
          </Wrapper>
        )}
      </Mutation>
    )
  }
}

export default MessageInput
