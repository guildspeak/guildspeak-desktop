import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Settings, Button } from './styles'
import WelcomeContainer from '../../containers/WelcomeContainer'

interface Props {
    history: any
  }

class Setting extends React.Component<Props> {
    handleLogin = () => {
        this.props.history.push('/login')
      }

    render() {
        return (
            <Settings>
                <Button onClick={this.handleLogin}>Log Out</Button>
            </Settings>
        )
    }
}

export default withRouter(Setting as any)