import * as React from 'react'
import { withRouter, RouteComponentProps, RouteProps } from 'react-router-dom'
import { Wrapper, Username, Buttons, Button } from './styles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_ME = gql`
  query {
    me {
      username
    }
  }
`

interface IProps {
  readonly id: string
  readonly name: string
}

class CurrentUser extends React.PureComponent<IProps & RouteComponentProps<RouteProps & IProps>> {
  handleSettings = () => {
    this.props.history.push('/settings')
  }

  render() {
    return (
      <Query query={GET_ME}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>{error.toString()}</div>
          return (
            <Wrapper>
              <Username>{data.me.username}</Username>
              <Buttons>
                <Button onClick={this.handleSettings} className="material-icons">
                  settings
                </Button>
              </Buttons>
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}

export default withRouter(CurrentUser as any)
