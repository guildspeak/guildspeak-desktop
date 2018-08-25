import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { Wrapper, ChannelName } from './styles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_ME = gql`
query {
  me {
    username
  }
}`

interface Props {
  id: string
  name: string
  history: any
}


class CurrentUser extends React.PureComponent<Props> {
  render() {
    return (
    <Wrapper>
      <Query query={GET_ME}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>{error.toString()}</div>
          return (
            <p>{data.me.username}</p>
          )
        }}
      </Query>
    </Wrapper>)
  }
}

export default withRouter(CurrentUser as any)
