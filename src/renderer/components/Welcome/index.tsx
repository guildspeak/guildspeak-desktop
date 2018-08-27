import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Wrapper, LoginForm, Info, ContinueButton } from './styles'

interface IProps {
  setToken: (token) => any
  data: any
  history: any
}

class Welcome extends React.Component<IProps, any> {
  componentDidMount() {
    this.props.setToken(this.props.data.login.token)
  }

  render() {
    return (
      <Wrapper>
        <LoginForm>
          <Info>Sup {this.props.data.login.user.username}</Info>
          <ContinueButton primary={true} onClick={this.props.history.push('/app')}>
            Continue to Guildspeak
          </ContinueButton>
        </LoginForm>
      </Wrapper>
    )
  }
}

export default withRouter(Welcome as any)
