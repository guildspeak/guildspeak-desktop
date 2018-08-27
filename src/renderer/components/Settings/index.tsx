import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Wrapper, LogOutButton,  UserSettings, SettingsOptions, SettingsButton, BackButton  } from './styles'

interface Props {
  history: any
}

class Settings extends React.Component<Props> {
  handleLogin = () => {
    this.props.history.push('/login')
  }

  handleBack = () => {
    this.props.history.push('/app')
    localStorage.removeItem('token')
  }

  render() {
    return (
      <Wrapper>
        <SettingsOptions>

          <BackButton onClick={this.handleBack}>Back</BackButton>

          <LogOutButton onClick={this.handleLogin}>Log Out</LogOutButton>

        </SettingsOptions>
        <UserSettings></UserSettings>
      </Wrapper>
    )
  }
}

export default withRouter(Settings as any)
