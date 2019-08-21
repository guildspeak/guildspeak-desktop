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
        id
      }
    }
  }
`

const GUILDS_SUBSCRIPTION = gql`
  subscription guildsSubscription {
    guildsSubscription {
      name
      id
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
              return { guilds: [...data.guilds, newData] }
            }
          })
          return (
            <Wrapper>
              {data.guilds.map(el => (
                <GuildContainer
                  key={el.id}
                  name={el.name}
                  guildId={el.id}
                  defaultChannelId={el.channels[0].id}
                />
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
