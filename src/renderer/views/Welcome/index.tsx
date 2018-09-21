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
    this.props.setToken((this.props.data.login || this.props.data.register).token)
  }

  continue = () => {
    this.props.history.push('/app')
  }

  render() {
    return (
      <Wrapper>
        <LoginForm>
          <Info>Sup, {(this.props.data.login || this.props.data.register).user.username}?</Info>
          <ContinueButton primary={true} onClick={this.continue}>
            Continue to Guildspeak
          </ContinueButton>
        </LoginForm>
      </Wrapper>
    )
  }
}

export default withRouter(Welcome as any)
