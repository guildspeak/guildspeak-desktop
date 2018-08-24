import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import Button from './Button'
import WelcomeContainer from '../containers/WelcomeContainer'
import { withRouter, Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0;
  margin: 0;
`
const SignUp = styled(Link)`
  color: #cccccc;
  padding: 14px;
  margin-top: 4px;
  text-decoration: none;
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

const EmailInput = styled.input`
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

const PasswordInput = styled(EmailInput)`
`

const LoginButton = styled(Button)`
  height: 36px;
  margin-top: 12px;
  width: 48%;
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

const RegisterButton = styled(LoginButton)`
  float: right;
  &:hover {
    background: #cecece;
  }
`

const ContinueButton = styled(LoginButton)`
  width: 100%;
`

const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
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
  token?: string
}

interface Props {
  token: string
  store: any
  setToken: (token) => any
  history: any
}

class Login extends React.Component<Props, IState> {
  state = {
    email: '',
    password: '',
    token: '',
  }

  handleLogin = loginMutation => () => {
    loginMutation({ variables: { email: this.state.email, password: this.state.password } })
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  handleRegister = () => {
    this.props.history.push('/register')
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  componentDidUpdate(prevProps: Props, prevState: IState) {
    if (this.state.token !== prevState.token) {
      this.props.setToken(this.props.token)
    }
  }

  render() {
    return (
      <Wrapper>
        <Mutation mutation={LOGIN}>
          {(login, { data, error }) => {
            if (error) {
            }

            if (data) {
              return (<WelcomeContainer data={data} />)
            }

            return (<LoginForm>
              <Info>Log in to your Guildspeak account</Info>
              <EmailInput type="email" onChange={this.handleEmail} placeholder="E-mail" />
              <PasswordInput type="password" onChange={this.handlePassword} placeholder="Password" />

              <LoginButton
                primary={true}
                onClick={this.handleLogin(login)}>Login</LoginButton>
              <RegisterButton onClick={this.handleRegister}>Sign Up</RegisterButton>
            </LoginForm>)

          }}
        </Mutation>
      </Wrapper>
    )
  }
}

export default withRouter(Login as any)
