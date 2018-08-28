import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Wrapper, Input } from './styles'
import Editor from 'draft-js-plugins-editor'
import { EditorState, DraftHandleValue, ContentState } from 'draft-js'
import 'draft-js/dist/Draft.css'
import createSingleLinePlugin from 'draft-js-single-line-plugin'
// import createEmojiPlugin from 'draft-js-emoji-plugin'
// import 'draft-js-emoji-plugin/lib/plugin.css'

const singleLinePlugin = createSingleLinePlugin()
// const emojiPlugin = createEmojiPlugin({
//   useNativeArt: true,
//   positionSuggestions: settings => {
//     return {
//       left: settings.decoratorRect.left - 14 + 'px',
//       top: settings.decoratorRect.top - 46 + 'px',
//       display: 'block',
//       transform: 'scale(1) translateY(-100%)',
//       transformOrigin: '1em 0% 0px',
//       transition: 'all 0.25s cubic-bezier(0.3, 1.2, 0.2, 1)',
//       boxShadow: 'none',
//       background: '#2e2e38',
//       backgroundColor: '#2e2e38',
//       color: '#fff'
//     }
//   }
// })

// const { EmojiSelect, EmojiSuggestions } = emojiPlugin
const plugins = [singleLinePlugin /*emojiPlugin*/]

const CREATE_MESSAGE = gql`
  mutation createMessage($content: String!, $channelId: ID!) {
    createMessage(content: $content, channelId: $channelId) {
      id
      content
    }
  }
`

interface IState {
  editorState: EditorState | string
}

interface Props {
  channelId: string
}

class MessageInput extends React.PureComponent<Props, IState> {
  state = {
    editorState: EditorState.createEmpty()
  }

  handleReturn(createMessage): DraftHandleValue {
    const content = Object.assign(this.state.editorState, {})
      .getCurrentContent()
      .getPlainText()
      .trim()
    if (content && content.length > 0) {
      this.setState({
        editorState: content
      })
      createMessage({ variables: { content, channelId: this.props.channelId } })
      const newEditorState = EditorState.push(this.state.editorState, ContentState.createFromText(''), 'remove-range')

      this.setState({
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
              {/* <EmojiSuggestions /> */}
              <Editor
                plugins={plugins}
                placeholder="write message..."
                editorState={this.state.editorState}
                onChange={this.handleChange}
                // tslint:disable-next-line:jsx-no-lambda
                handleReturn={() => this.handleReturn(createMessage)}
              />
            </Input>
            {/* <EmojiSelect /> */}
          </Wrapper>
        )}
      </Mutation>
    )
  }
}

export default MessageInput
