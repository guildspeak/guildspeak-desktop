import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
`
const MessageBubble = styled.div`
  flex: 1;
  height: auto;
  word-break: break-all;
`

const MessageContentWrapper = styled.div`
  flex-direction: row;
  display: flex;
`

const MessageContent = styled.div`
  padding-right: 8px;
  margin-right: auto;
  display: flex;
`

const Hr = styled.hr`
  display: block;
  unicode-bidi: isolate;
  -webkit-margin-before: 0.5em;
  -webkit-margin-after: 0.5em;
  -webkit-margin-start: auto;
  -webkit-margin-end: 10px;
  overflow: hidden;
  border: 0.5px solid #2d2d31;
`

const DropdownButton = styled.div`
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
  font-size: 18px;
  padding: 4px;
  border-radius: 2px;
`

export { Wrapper, MessageContentWrapper, MessageBubble, MessageContent, Hr, DropdownButton }
