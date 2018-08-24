import * as React from 'react'
import Application from './Application'
import { withRouter } from 'react-router-dom'

class Startup extends React.Component<{ token: string, history: any }, { logged: boolean }> {
  state = {
    logged: false
  }

  componentDidMount() {
    if (!this.props.token) {
      this.setState({ logged: false })
      this.props.history.push('/login')
    } else {
      this.setState({ logged: true })
    }
  }

  render() {
    if (this.state.logged) {
      return (<Application />)
    }
    return (<p>redirecting to login page</p>)
  }
}

export default withRouter(Startup as any)
