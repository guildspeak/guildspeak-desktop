import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { Wrapper, Input, Button, Buttons } from './styles'
import Editor from 'draft-js-plugins-editor'
import { EditorState, DraftHandleValue, ContentState } from 'draft-js'
import 'draft-js/dist/Draft.css'
import createSingleLinePlugin from 'draft-js-single-line-plugin'

type Props = {
  channelId: string
}

const singleLinePlugin = createSingleLinePlugin({ stripEntities: false })
const plugins = [singleLinePlugin]

const CREATE_MESSAGE = gql`
  mutation createMessage($content: String!, $channelId: ID!) {
    createMessage(content: $content, channelId: $channelId) {
      id
      content
    }
  }
`

const MessageInput = ({ channelId }: Props) => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())
  const [createMessage] = useMutation(CREATE_MESSAGE)

  const handleReturn = createMessage => (e): DraftHandleValue => {
    const content = editorState
      .getCurrentContent()
      .getPlainText()
      .trim()
    if (content && content.length > 0) {
      setEditorState((content as unknown) as EditorState)
      createMessage({ variables: { content, channelId } })
      const newEditorState = EditorState.push(
        editorState,
        ContentState.createFromText(''),
        'remove-range'
      )

      setEditorState(EditorState.moveFocusToEnd(newEditorState))
      return 'handled'
    }
  }

  const handleChange = editorState => setEditorState(editorState)

  return (
    <Wrapper>
      <Input>
        <Editor
          blockRenderMap={singleLinePlugin.blockRenderMap}
          plugins={plugins}
          placeholder="Write message..."
          editorState={editorState}
          onChange={handleChange}
          handleReturn={handleReturn(createMessage)}
        />
      </Input>
      <Buttons>
        <Button className="material-icons">image</Button>
        <Button className="material-icons">insert_emoticon</Button>
      </Buttons>
    </Wrapper>
  )
}

export default MessageInput
