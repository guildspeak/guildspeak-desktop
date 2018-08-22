import * as React from 'react'
import { Container, Row, Column } from 'react-rasta'
import Sidebar from './Sidebar';
import styled from 'styled-components'
import Messages from './Messages'
import Button from './Button'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_CHANNELS = gql`
query {
  channels {
    name
  }
}`
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

const Input = styled.input`
  background: hsla(240, 1%, 23%, 0.5);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  color: #fff;
  font-size: 16px;
  padding: 10px 10px 10px 10px;
  display: block;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 0;
  border-bottom: none;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -14px;
    font-size: 12px;
    color: blue;
  }
`

const LeftColumn = styled(Column)`
  background: hsla(240, 1%, 23%, 0.5);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  `

const Application = () => (
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
          <Input placeholder="Write message..." />
        </Row>
      </Column>

    </Row>
  </Wrapper>
)

export default Application
