import * as React from 'react'
import { withRouter, RouteComponentProps, RouteProps } from 'react-router-dom'
import { Wrapper, LogOutButton, UserSettings, SettingsOptions, SettingsButton, BackButton, Hr, Description } from './styles'
import SettingsList from '../../components/SettingsOptions/index'

class Settings extends React.Component<RouteComponentProps<RouteProps>>  {
  render() {
    return (
      <Wrapper>
        <SettingsList />
      </Wrapper>
    )
  }
}

export default withRouter(Settings as any)
