import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import WelcomeContainer from '../../containers/WelcomeContainer'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {
  Wrapper,
  LoginForm,
  Info,
  EmailInput,
  PasswordInput,
  LoginButton,
  RegisterButton,
  LoginLogo,
  ErrorLogin
} from './styles'
import ErrorAlert from '../../components/ErrorAlert'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`
const Login = ({ history }: RouteComponentProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [login, { data, error }] = useMutation(LOGIN)

  const handleLogin = loginMutation => () => {
    loginMutation({ variables: { email, password } })
  }

  const handleEmail = e => setEmail(e.target.value)
  const handleRegister = () => history.push('/register')
  const handlePassword = e => setPassword(e.target.value)

  if (error) {
    return <ErrorAlert>{error.message}</ErrorAlert>
  }

  if (data) {
    return <WelcomeContainer data={data} />
  }

  return (
    <Wrapper>
      <LoginForm>
        <LoginLogo />
        <Info>Log in to your Guildspeak account</Info>
        <EmailInput type="email" onChange={handleEmail} placeholder="E-mail" />
        <PasswordInput type="password" onChange={handlePassword} placeholder="Password" />
        <ErrorLogin />
        <LoginButton primary={true} onClick={handleLogin(login)}>
          Login
        </LoginButton>
        <RegisterButton onClick={handleRegister}>Sign Up</RegisterButton>
      </LoginForm>
    </Wrapper>
  )
}

export default withRouter(Login)
