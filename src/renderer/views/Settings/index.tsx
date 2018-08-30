import * as React from 'react'
import { withRouter, RouteComponentProps, RouteProps } from 'react-router-dom'
import { Wrapper } from './styles'
import SettingsList from '../../components/SettingsOptions/index'

class Settings extends React.Component<RouteComponentProps<RouteProps>> {
  render() {
    return (
      <Wrapper>
        <SettingsList history={this.props.history} location={this.props.location} match={this.props.match} />
      </Wrapper>
    )
  }
}

export default withRouter(Settings as any)