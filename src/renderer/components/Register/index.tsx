import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import WelcomeContainer from '../../containers/WelcomeContainer'
import { withRouter } from 'react-router-dom'
import { Wrapper, RegisterForm, Info, UsernameInput, EmailInput, PasswordInput, RegisterButton, BackButton } from './styles'

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

  handleLogin = () => {
    this.props.history.push('login')
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
              <BackButton onClick={this.handleLogin}>I have account! Let's log in.</BackButton>
            </RegisterForm>)

          }}
        </Mutation>
      </Wrapper>
    )
  }
}

export default withRouter(Register as any)
