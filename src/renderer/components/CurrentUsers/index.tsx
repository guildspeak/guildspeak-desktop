import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Wrapper, Username } from './styles'
import { Wrapper as LoadingWrapper } from '../Loading/styles'
import { RouteComponentProps, RouteProps } from 'react-router'

const GET_USERS = gql`
  query guild($id: ID!) {
    guild(id: $id) {
      id
      users {
        id
        username
      }
    }
  }
`
interface IProps {
  readonly guildId: string
}

class CurrentUsers extends React.PureComponent<IProps & RouteComponentProps<RouteProps & IProps>> {
  render() {
    return (
      <Query query={GET_USERS} variables={{ id: this.props.guildId }}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
          if (error) return <LoadingWrapper>{error.toString()} users</LoadingWrapper>
          return (
            <Wrapper>
              <div>Members</div>
              {data.guild.users.map(el => (
                <Username key={el.id}>{el.username}</Username>
              ))}
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}
export default CurrentUsers
