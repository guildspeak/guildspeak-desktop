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
  width: 100vw;
  padding: 0;
  margin: 0;
`

const LoginForm = styled.form`
  padding: 0;
  margin: 0;
`

const Info = styled.div`
  padding: 4px;
  margin: 0;
  cursor: default;
  font-family: 'Francois One', sans-serif;
  text-transform: uppercase;
  font-size: 18px;
`

const Input = styled.input`
  background: #2e2e38;
  color: #cccccc;
  font-size: 16px;
  padding: 12px;
  height: 24px;
  margin-top: 10px;
  width: 100%;
  border: none;
  border-radius: 12px;
  border-bottom: none;
  caret-color: #149f98;
  &:focus {
    outline: none;
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
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button primary className="material-icons">send</Button>
        </LoginForm>
      </Wrapper>
    )
  }
}

export default Login
