import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Wrapper, Button } from './styles'

interface Props {
  history: any
}

class Settings extends React.Component<Props> {
  handleLogin = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <Wrapper>
        <Button onClick={this.handleLogin}>Log Out</Button>
      </Wrapper>
    )
  }
}

export default withRouter(Settings as any)
