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
 unicode-bidi: isolate;
 -webkit-margin-before: 0.5em;
 -webkit-margin-after: 0.5em;
 -webkit-margin-start: auto;
 -webkit-margin-end: auto;
 overflow: hidden;
 border-top: 0.5px solid #8c8b8b;
 border-bottom: 0.5px solid #8c8b8b;
`

export { Wrapper, MessageBubble, MessageContent, Hr }