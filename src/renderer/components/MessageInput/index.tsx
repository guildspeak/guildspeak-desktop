import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { Wrapper, Input, Button, Buttons } from './styles'
import { Editor } from 'slate-react'
import Plain from 'slate-plain-serializer'
import { Value } from 'slate'

type Props = {
  channelId: string
}

const CREATE_MESSAGE = gql`
  mutation createMessage($content: String!, $channelId: ID!) {
    createMessage(content: $content, channelId: $channelId) {
      id
      content
    }
  }
`

const MessageInput = ({ channelId }: Props) => {
  const [value, setValue] = useState<Value>(Plain.deserialize(''))
  const [createMessage] = useMutation(CREATE_MESSAGE)

  const handleReturn = (event: KeyboardEvent, editor, next: () => void) => {
    if (event.shiftKey && event.key === 'Enter') {
      editor.insertText('\n')
      return true
    }
    if (event.key === 'Enter') {
      const content = Plain.serialize(editor.value)
      if (content && content.trim().length > 0) {
        createMessage({ variables: { content, channelId } })
      }
      setValue(Plain.deserialize(''))
      event.preventDefault()
      setTimeout(() => editor.focus())
      return true
    }
    return next()
  }

  const handleChange = currentState => setValue(currentState.value)

  return (
    <Wrapper>
      <Input>
        <Editor
          placeholder="Write message..."
          value={value}
          onChange={handleChange}
          onKeyDown={handleReturn}
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
