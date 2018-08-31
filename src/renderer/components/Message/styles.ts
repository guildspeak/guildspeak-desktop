import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
`
const MessageBubble = styled.div`
  flex: 1;
  height: auto;
  word-break: break-all;
`
const MessageContent = styled.p`
  padding-right: 8px;
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

export { Wrapper, MessageBubble, MessageContent, Hr }
