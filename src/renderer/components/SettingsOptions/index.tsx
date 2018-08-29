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

  handleUser = () => {
    this.props.history.push('/usersettings')
  }

  render() {
    return (
      <Wrapper>
        <SettingsOptionsList>
          <BackButton onClick={this.handleBack}>Back</BackButton>
          <Description>User Settings</Description>
          <SettingsButton onClick={this.handleUser}>My Settings</SettingsButton>
          <SettingsButton>Authorized Apps</SettingsButton>
          <SettingsButton>Privacy & Safety</SettingsButton>
          <Hr aria-hidden="true" />
          <Description>App Settings</Description>
          <SettingsButton>KeyBinds</SettingsButton>
          <SettingsButton>Appearance</SettingsButton>
          <SettingsButton>Notifications</SettingsButton>
          <SettingsButton>Language</SettingsButton>
          <SettingsButton>Voice Settings</SettingsButton>
          <SettingsButton>Overlay</SettingsButton>
          <Hr aria-hidden="true" />
          <LogOutButton onClick={this.handleLogout}>Log Out</LogOutButton>
        </SettingsOptionsList>
        <UserSettings >test</UserSettings>
      </Wrapper>
    )
  }
}

export default withRouter(SettingsList as any)
