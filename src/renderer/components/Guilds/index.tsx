import * as React from 'react'
import GuildContainer from '../../containers/GuildContainer'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Wrapper } from './styles'
import { Wrapper as LoadingWrapper } from '../Loading/styles'
import { RouteComponentProps, RouteProps, withRouter } from 'react-router'
import CreateGuildContainer from '../../containers/CreateGuildContainer'

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
      previousValues {
        id
      }
      mutation
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
            updateQuery: (_prev, received) => {
              const newData = received.subscriptionData.data.guildsSubscription
              switch (newData.mutation) {
                case 'CREATED':
                  return { guilds: [...data.guilds, newData.node] }
                case 'UPDATED':
                  return { guilds: data.guilds.map(g => (g.id === newData.node.id ? newData.node : g)) }
                case 'DELETED':
                  return { guilds: data.guilds.filter(g => g.id !== newData.previousValues.id) }
              }
            }
          })
          return (
            <Wrapper>
              {data.guilds.map(el => (
                <GuildContainer key={el.id} name={el.name} guildId={el.id} />
              ))}
              <CreateGuildContainer />
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}

export default withRouter(Guilds as any)
