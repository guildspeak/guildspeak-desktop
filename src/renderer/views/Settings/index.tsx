import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper } from './styles'
import SettingsList from '../../components/SettingsOptions/index'

class Settings extends React.Component<RouteComponentProps> {
  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc, false)
  }

  handleEsc = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      this.props.history.push('/app')
    }
  }

  render() {
    return (
      <Wrapper>
        <SettingsList history={this.props.history} location={this.props.location} match={this.props.match} />
      </Wrapper>
    )
  }
}

export default withRouter(Settings as any)
