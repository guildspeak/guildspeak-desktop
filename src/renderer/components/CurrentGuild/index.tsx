import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Wrapper } from './styles'
import { Wrapper as LoadingWrapper } from '../Loading/styles'
import ChannelContainer from '../../containers/ChannelContainer'
import { RouteComponentProps, RouteProps } from 'react-router'
import CreateChannel from '../CreateChannel'

const GET_GUILD = gql`
  query guild($id: ID!) {
    guild(id: $id) {
      name
      id
      channels {
        name
        id
      }
    }
  }
`

const CHANNELS_SUBSCRIPTION = gql`
  subscription guildChannelsSubscription($guildId: ID!) {
    guildChannelsSubscription(guildId: $guildId) {
      node {
        id
        name
      }
      previousValues {
        id
        name
      }
      mutation
    }
  }
`

interface IProps {
  readonly guildId: string
}

class CurrentGuild extends React.Component<IProps & RouteComponentProps<RouteProps & IProps>> {
  render() {
    return (
      <Wrapper>
        <Query query={GET_GUILD} variables={{ id: this.props.guildId }}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
            if (error) {
              console.error(error)
              if (error.toString().includes('Cannot return null for non-nullable field')) return <LoadingWrapper />
              return <LoadingWrapper>{error.toString()}</LoadingWrapper>
            }
            subscribeToMore({
              document: CHANNELS_SUBSCRIPTION,
              variables: { guildId: data.guild.id },
              updateQuery: (_prev, received) => {
                console.log(received)
                const newData = received.subscriptionData.data.guildChannelsSubscription
                switch (newData.mutation) {
                  case 'CREATED':
                    return { guild: { ...data.guild, channels: [...data.guild.channels, newData.node] } }
                  case 'UPDATED':
                    return { guild: { ...data.guild, channels: data.guild.channels.map(c => (c.id === newData.node.id ? newData.node : c)) } }
                  case 'DELETED':
                    return { guild: { ...data.guild, channels: data.guild.channels.filter(c => c.id !== newData.previousValues.id) } }
                }
              }
            })
            return (
              <div>
                {data.guild.channels.map(el => (
                  <ChannelContainer name={el.name} id={el.id} key={el.id} />
                ))}
                <CreateChannel guildId={this.props.guildId} guildName={data.guild.name} />
              </div>
            )
          }}
        </Query>
      </Wrapper>
    )
  }
}
export default CurrentGuild
