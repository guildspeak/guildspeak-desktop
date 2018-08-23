import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const LoginForm = styled.div`
  padding: 0;
  margin: 0;
`

const Info = styled.div`
  padding: 8px;
  margin: 0;
  cursor: default;
  font-family: 'Francois One', sans-serif;
  text-transform: uppercase;
  font-size: 18px;
`

const Input = styled.input`
  background: #2e2e38;
  margin-top: 8px;
  box-sizing: border-box;
  color: #cccccc;
  font-size: 18px;
  padding: 14px;
  display: block;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 8px;
  border-bottom: none;
  caret-color: #149f98;
  &:focus {
    outline: none;
  }
`

const LoginButton = styled(Button)`
  height: 36px;
  margin-top: 12px;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #009688;
  }
`

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    createMessage(email: $email, password: $password) {
      user {
        id
        username
      }
      token
    }
  }
`

interface IState {
  email?: string
  password?: string
}

class Login extends React.Component<{}, IState> {
  state = {
    email: '',
    password: ''
  }


  render() {
    return (
      <Wrapper>
        <LoginForm>
          <Info>Log in to your Guildspeak account</Info>
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <LoginButton primary>Login</LoginButton>
        </LoginForm>
      </Wrapper>
    )
  }
}

export default Login
