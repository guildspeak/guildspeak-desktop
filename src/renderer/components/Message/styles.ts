import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  padding: 0px 16px 0px 16px;
`
const MessageBubble = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  word-break: break-all;
`

const MessageContentWrapper = styled.div`
  flex-direction: row;
  display: flex;
`

const MessageContent = styled.div`
  margin-right: auto;
  display: flex;
`

const Hr = styled.hr`
  display: flex;
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
