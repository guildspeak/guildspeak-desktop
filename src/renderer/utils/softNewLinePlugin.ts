import { RichUtils, DraftHandleValue } from 'draft-js'

const SOFT_NEWLINE_COMMAND = 'insert-soft-newline'

export default function() {
  return {
    keyBindingFn(e) {
      if (e.shiftKey && e.keyCode === 13) {
        return SOFT_NEWLINE_COMMAND
      }
    },
    handleKeyCommand: function handleKeyCommand(command, editorState, { setEditorState }): DraftHandleValue {
      if (command === SOFT_NEWLINE_COMMAND) {
        setEditorState(RichUtils.insertSoftNewline(editorState))
        return 'handled'
      }
      return 'not-handled'
    }
  }
}
