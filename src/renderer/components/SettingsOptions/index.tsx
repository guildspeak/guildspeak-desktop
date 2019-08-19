import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {
  Wrapper,
  LogOutButton,
  SettingsOptionsList,
  SettingsButton,
  BackButton,
  Hr,
  Description
} from './styles'
import UserSettings from '../UserSettings'

const SettingsList = ({ history }: RouteComponentProps) => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }

  const handleBack = () => {
    history.push('/app')
  }

  const handleUser = () => {
    history.push('/usersettings')
  }

  return (
    <Wrapper>
      <SettingsOptionsList>
        <BackButton className="material-icons" onClick={handleBack}>
          arrow_back
        </BackButton>
        <Description>User Settings</Description>
        <SettingsButton onClick={handleUser}>My Settings</SettingsButton>
        <SettingsButton>Authorized Apps</SettingsButton>
        <SettingsButton>Privacy & Safety</SettingsButton>
        <Hr aria-hidden="true" />
        <Description>App Settings</Description>
        <SettingsButton>Keybinds</SettingsButton>
        <SettingsButton>Appearance</SettingsButton>
        <SettingsButton>Notifications</SettingsButton>
        <SettingsButton>Language</SettingsButton>
        <SettingsButton>Voice Settings</SettingsButton>
        <SettingsButton>Overlay</SettingsButton>
        <Hr aria-hidden="true" />
        <LogOutButton onClick={handleLogout}>Log Out</LogOutButton>
      </SettingsOptionsList>
      <UserSettings>test</UserSettings>
    </Wrapper>
  )
}

export default SettingsList
