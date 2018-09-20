import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import WelcomeContainer from '../../containers/WelcomeContainer'
import { withRouter } from 'react-router-dom'
import { Wrapper, LoginForm, Info, EmailInput, PasswordInput, LoginButton, RegisterButton, LoginLogo } from './styles'

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

interface IState {
  email?: string
  password?: string
  token?: string
}

interface Props {
  token: string
  store: any
  history: any
}

class Login extends React.Component<Props, IState> {
  state = {
    email: '',
    password: '',
    token: ''
  }

  handleLogin = loginMutation => () => {
    loginMutation({ variables: { email: this.state.email, password: this.state.password } })
  }

  handleEmail = e => {
    this.setState({ email: e.target.value })
  }

  handleRegister = () => {
    this.props.history.push('/register')
  }

  handlePassword = e => {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <Wrapper>
        <Mutation mutation={LOGIN}>
          {(login, { data, error }) => {
            if (error) {
            }

            if (data) {
              return <WelcomeContainer data={data} />
            }

            return (
              <LoginForm>
                <LoginLogo />
                <Info>Log in to your Guildspeak account</Info>

                <EmailInput type="email" onChange={this.handleEmail} placeholder="E-mail" />
                <PasswordInput type="password" onChange={this.handlePassword} placeholder="Password" />

                <LoginButton primary={true} onClick={this.handleLogin(login)}>
                  Login
                </LoginButton>
                <RegisterButton onClick={this.handleRegister}>Sign Up</RegisterButton>
              </LoginForm>
            )
          }}
        </Mutation>
      </Wrapper>
    )
  }
}

export default withRouter(Login as any)
