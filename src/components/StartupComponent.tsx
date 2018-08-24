import * as React from 'react'
import Application from './Application'
import { withRouter } from 'react-router-dom'

class StartupComponent extends React.Component<{ token: string, history: any }, { logged: boolean }> {
  state = {
    logged: false
  }

  componentDidMount() {
    if (!this.props.token) {
      this.setState({ logged: true })
      this.props.history.push('/login')
    } else {
      this.setState({ logged: false })
    }
  }

  render() {
    if (this.state.logged) {
      return (<p> redirecting to login</p>)
    }
    return <Application />
  }
}

export default withRouter(StartupComponent as any)
