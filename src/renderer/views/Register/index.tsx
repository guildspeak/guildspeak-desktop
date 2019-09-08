import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import WelcomeContainer from '../../containers/WelcomeContainer'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {
  Wrapper,
  RegisterForm,
  Info,
  UsernameInput,
  EmailInput,
  PasswordInput,
  RegisterButton,
  BackButton,
  RegisterLogo
} from './styles'

const REGISTER = gql`
  mutation register($email: String!, $password: String!, $username: String!) {
    register(email: $email, password: $password, username: $username) {
      token
      user {
        username
      }
    }
  }
`

const Register = ({ history }: RouteComponentProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  const [register, { data, error }] = useMutation(REGISTER)

  const hangleRegister = registerMutation => () => {
    registerMutation({
      variables: {
        email,
        password,
        username
      }
    })
  }

  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)
  const handleUsername = e => setUsername(e.target.value)

  const handleLogin = () => history.push('login')

  if (error) {
    if (error.toString().includes('unique')) {
      alert('This username or email is already taken!')
    } else alert('Unknown error. Check console for more details')
  }

  if (data) {
    return <WelcomeContainer data={data} />
  }

  return (
    <Wrapper>
      <RegisterForm>
        <RegisterLogo />
        <Info>Create your Guildspeak account</Info>
        <UsernameInput onChange={handleUsername} placeholder="Username" />
        <EmailInput type="email" onChange={handleEmail} placeholder="E-mail" />
        <PasswordInput type="password" onChange={handlePassword} placeholder="Password" />
        <RegisterButton primary={true} onClick={hangleRegister(register)}>
          Register
        </RegisterButton>
        <BackButton onClick={handleLogin}>I have account! Let's log in.</BackButton>
      </RegisterForm>
    </Wrapper>
  )
}

export default withRouter(Register)
