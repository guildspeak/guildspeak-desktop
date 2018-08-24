import * as React from 'react'
import Application from './Application'
import { withRouter } from 'react-router-dom'

class StartupComponent extends React.Component<{ token: string, history: any }, {}> {
  render() {
    const isNotLoggedIn = this.props.token === ''
    if (isNotLoggedIn) {
      this.props.history.push('/login')
      return (<p> redirecting to login</p>)
    }
    return <Application />
  }
}

export default withRouter(StartupComponent as any)
