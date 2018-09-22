import * as React from 'react'
import GuildContainer from '../../containers/GuildContainer'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Wrapper } from './styles'
import { Wrapper as LoadingWrapper } from '../Loading/styles'
import { RouteComponentProps, RouteProps, withRouter } from 'react-router'
import CreateGuild from '../CreateGuild'

const GET_GUILDS = gql`
  query guilds {
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

const GUILDS_SUBSCRIPTION = gql`
  subscription guildsSubscription {
    guildsSubscription {
      node {
        name
        id
        channels {
          name
          id
        }
      }
    }
  }
`

class Guilds extends React.PureComponent<RouteComponentProps> {
  render() {
    return (
      <Query query={GET_GUILDS}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
          if (error) return <LoadingWrapper>{error.toString()} guilds</LoadingWrapper>
          subscribeToMore({
            document: GUILDS_SUBSCRIPTION,
            updateQuery: (_prev, data) => {
              return { guilds: data.subscriptionData.data.guildsSubscription.node }
            }
          })
          return (
            <Wrapper>
              {data.guilds.map(el => (
                <GuildContainer key={el.id} name={el.name} guildId={el.id} />
              ))}
              <CreateGuild />
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}

export default withRouter(Guilds as any)
