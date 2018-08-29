import * as React from 'react'
import { withRouter, RouteComponentProps, RouteProps } from 'react-router-dom'
import { Wrapper, LogOutButton, UserSettings, SettingsOptionsList, SettingsButton, BackButton, Hr, Description } from './styles'

class SettingsList extends React.Component<RouteComponentProps<RouteProps>> {
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
        <SettingsOptionsList>
          <ul>
            <li>
              <BackButton onClick={this.handleBack}>Back</BackButton>
            </li>
            <Description>User Settings</Description>
            <li>
              <SettingsButton>My Settings</SettingsButton>
            </li>
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
              <SettingsButton>Appearance</SettingsButton>
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
            <li>
              <SettingsButton>Overlay</SettingsButton>
            </li>
            <Hr aria-hidden="true" />
            <li>
              <LogOutButton onClick={this.handleLogout}>Log Out</LogOutButton>
            </li>
          </ul>
        </SettingsOptionsList>
        <UserSettings />
      </Wrapper>
    )
  }
}

export default withRouter(SettingsList as any)
