import * as React from 'react'
import { Container, Row, Column } from 'react-rasta'
import Sidebar from './Sidebar';
import styled from 'styled-components'
import Messages from './Messages'

const ChannelInfo = styled(Row)`
  background: #3c3c3c;
  height: 24px;
`
const Wrapper = styled(Container)`
  color: #fff;
`

const Input = styled.input`
background: #3c3c3c;
color: #fff;
font-size: 16px;;
padding: 10px 10px 10px 5px;
display: block;
width: 100%;
height: 36px;
border: none;
border-radius: 0;
border-bottom: none;
&:focus {
  outline: none;
  border-bottom: 1px solid #fff;
}
&:focus ~ label,
&:valid ~ label {
  top: -14px;
  font-size: 12px;
  color: blue;
}
`

const Application = () => (
  <Wrapper fluid>
    <Row>
      <Column size={2}>
        <Sidebar />
      </Column>

      <Column size="auto">
        <ChannelInfo>
          channel info
        </ChannelInfo>
        <Row>
          <Messages />
        </Row>
        <Row>
          <Input placeholder="Write message..." />
        </Row>
      </Column>

    </Row>
  </Wrapper>
)

export default Application
