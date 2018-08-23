import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import Button from './Button';
import { setToken } from '../actions/authActions';
import { withRouter, Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const RegisterForm = styled.div`
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

const ButtonsWrapper = styled(Wrapper)`
`

const PasswordInput = styled(Input)`
  -webkit-text-security: disc;
  -moz-text-security: disc;
  text-security: disc;
`

const RegisterButton = styled(Button)`
  height: 36px;
  margin-top: 12px;
  width: 100%;
  padding: 8px;
  display: inline-block;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #009688;
  }
`


const REGISTER = gql`
mutation register($email: String!, $password: String!, $username: String!) {
  register(email: $email, password: $password, username: $username) {
      token,
      user {
        username
      }
  }
}
`

interface IState {
  email?: string
  password?: string
  username?: string
}

interface Props {
  token: string
  store: any
  setToken : (token) => any
  history: any
}

class Register extends React.Component<Props, IState> {
  state = {
    email: '',
    password: '',
    username: ''
  }

  doRegister(registerMutation) {
    registerMutation({ variables: { email: this.state.email, password: this.state.password, username: this.state.username } })
  }

  render() {
    return (
      <Wrapper>
        <Mutation mutation={REGISTER}>
          {(register, { data, error }) => {
            if (error) {
            }

            if (data) {
              this.props.setToken(data.register.token)
              return (<RegisterForm>
                <Info>Sup { data.register.user.username }</Info>
                <RegisterButton primary onClick={ (e) => this.props.history.push('/')}>Continue to Guildspeak</RegisterButton>
              </RegisterForm>)
            }

            return (<RegisterForm>
              <Info>Create your Guildspeak account</Info>
              <Input onChange={(e) => this.setState({ username: e.target.value })} placeholder="Username" />
              <Input onChange={(e) => this.setState({ email: e.target.value })} placeholder="E-mail" />
              <PasswordInput onChange={(e) => this.setState({ password: e.target.value })} placeholder="Password" />
              <RegisterButton primary onClick={ (e) => this.doRegister(register) }>Register</RegisterButton>
            </RegisterForm>)

          }}
        </Mutation>
      </Wrapper>
    )
  }
}

export default withRouter(Register as any)
