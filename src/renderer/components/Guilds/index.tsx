import * as React from 'react'
import GuildContainer from '../../containers/GuildContainer'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Wrapper } from './styles'
import { Wrapper as LoadingWrapper } from '../Loading/styles'
import { RouteComponentProps, RouteProps, withRouter } from 'react-router'
import CreateGuild from '../CreateGuild'

const GET_GUILDS = gql`
  query {
    guilds {
      name
      id
      channels {
        name
        id
      }
    }
  }
`

class Guilds extends React.PureComponent<RouteComponentProps<RouteProps>> {
  render() {
    return (
      <Wrapper>
        <Query query={GET_GUILDS}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
            if (error) return <LoadingWrapper>{error.toString()} guilds</LoadingWrapper>
            return data.guilds.map(el => <GuildContainer key={el.id} name={el.name} guildId={el.id} />)
          }}
        </Query>
        <CreateGuild />
      </Wrapper>
    )
  }
}

export default withRouter(Guilds as any)
