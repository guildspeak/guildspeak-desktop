import * as React from 'react'
import { Container, Row, Column } from 'react-rasta'
import Sidebar from './Sidebar'
import styled from 'styled-components'
import Messages from './Messages'
import MessageInput from './MessageInput'

const ChannelInfo = styled(Row)`
  height: 40px;
  padding: 4px;
  background: hsla(240, 1%, 23%, 0.5);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`
const Wrapper = styled(Container)`
  color: #fff;
`

const LeftColumn = styled(Column)`
  background: hsla(240, 1%, 23%, 0.5);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  `

const Application: React.SFC = () => (
  <Wrapper fluid>
    <Row>
      <LeftColumn size={2}>
        <Sidebar />
      </LeftColumn>
      <Column size="auto">
        <Row>
          <Messages />
        </Row>
        <Row>
          <MessageInput />
        </Row>
      </Column>
    </Row>
  </Wrapper>
)

export default Application
