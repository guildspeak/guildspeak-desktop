import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Wrapper, LogOutButton, UserSettings, SettingsOptions, SettingsButton, BackButton, Hr, Description } from './styles'

interface Props {
  history: any
}

class Settings extends React.Component<Props> {
  handleLogout = () => {
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  handleBack = () => {
    this.props.history.push('/app')
  }

  render() {
    return (
      <Wrapper>
        <SettingsOptions>
          <ul>
            <li>
              <BackButton onClick={this.handleBack}>Back</BackButton>
            </li>

            <Description>User Settings</Description>
            <li>
              <SettingsButton>Authorized Apps</SettingsButton>
            </li>
            <li>
              <SettingsButton>Privacy & Sefety</SettingsButton>
            </li>
            <Hr aria-hidden="true" />
            <Description>App Settings</Description>
            <li>
              <SettingsButton>KeyBinds</SettingsButton>
            </li>
            <li>
              <SettingsButton>Notifications</SettingsButton>
            </li>
            <li>
              <SettingsButton>Language</SettingsButton>
            </li>
            <li>
              <SettingsButton>Voice Settings</SettingsButton>
            </li>
            <Hr aria-hidden="true" />
            <li>
              <LogOutButton onClick={this.handleLogout}>Log Out</LogOutButton>
            </li>
          </ul>
        </SettingsOptions>
        <UserSettings />
      </Wrapper>
    )
  }
}

export default withRouter(Settings as any)
