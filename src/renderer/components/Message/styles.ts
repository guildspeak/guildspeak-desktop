import styled from 'styled-components'

const Wrapper = styled.div`
flex: 1;
`
const MessageBubble = styled.div`
 flex: 1;
 height: auto;
 word-break: break-all;
`
const MessageContent= styled.p`
 padding-right: 8px;
`

const Hr = styled.hr`
 display: block;
 unicode-bidi: isolate;
 -webkit-margin-before: 0.5em;
 -webkit-margin-after: 0.5em;
 -webkit-margin-start: auto;
 -webkit-margin-end: auto;
 overflow: hidden;
 border-style: inset;
 border-width: 1px;
`

export { Wrapper, MessageBubble, MessageContent, Hr }