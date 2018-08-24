import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import Button from './Button'
import WelcomeContainer from '../containers/WelcomeContainer'
import { withRouter } from 'react-router-dom'

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

const UsernameInput = styled(Input)``

const EmailInput = styled(Input)``

const PasswordInput = styled(Input)`
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
  setToken: (token) => any
  history: any
}

class Register extends React.Component<Props, IState> {
  state = {
    email: '',
    password: '',
    username: ''
  }

  hangleRegister(registerMutation) {
    registerMutation({ variables: { email: this.state.email, password: this.state.password, username: this.state.username } })
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  handleUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <Wrapper>
        <Mutation mutation={REGISTER}>
          {(register, { data, error }) => {
            if (error) {
              return (<p>wrong things heppens here</p>)
              console.error(error)
            }

            if (data) {
              return (<WelcomeContainer data={data} />)
            }

            return (<RegisterForm>
              <Info>Create your Guildspeak account</Info>
              <UsernameInput onChange={this.handleUsername} placeholder="Username" />
              <EmailInput type="email" onChange={this.handleEmail} placeholder="E-mail" />
              <PasswordInput type="password" onChange={this.handlePassword} placeholder="Password" />
              <RegisterButton primary={true}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={(e) => this.hangleRegister(register)}>Register</RegisterButton>
            </RegisterForm>)

          }}
        </Mutation>
      </Wrapper>
    )
  }
}

export default withRouter(Register as any)
