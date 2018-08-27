import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Wrapper, LogOutButton,  UserSettings, SettingsOptions, SettingsButton, BackButton, Hr, Description  } from './styles'

interface Props {
  history: any
}

class Settings extends React.Component<Props> {
  handleLogin = () => {
    this.props.history.push('/login')
    localStorage.removeItem('token')
  }

  handleBack = () => {
    this.props.history.push('/app')
  }

  render() {
    return (
      <Wrapper>
        <SettingsOptions>
          <ul>
            <li><BackButton onClick={this.handleBack}>Back</BackButton></li>
            
            <Description>User Settings</Description>
            <li><SettingsButton>Test Button</SettingsButton></li>
            <li><SettingsButton>Test Button</SettingsButton></li>
            <Hr aria-hidden="true" />
            <Description>App Settings</Description>
            <li><SettingsButton>Test Button</SettingsButton></li>
            <li><SettingsButton>Test Button</SettingsButton></li>
            <li><SettingsButton>Test Button</SettingsButton></li>
            <Hr aria-hidden="true" />
            <li><LogOutButton onClick={this.handleLogin}>Log Out</LogOutButton></li>
          </ul>
          
          
          

        </SettingsOptions>
        <UserSettings></UserSettings>
      </Wrapper>
    )
  }
}

export default withRouter(Settings as any)
