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
      id
      name
      channels {
        id
        name
      }
    }
  }
`

const CHANNELS_SUBSCRIPTION = gql`
  subscription guildChannelsSubscription($id: ID!) {
    guildChannelsSubscription(id: $id) {
      id
      name
    }
  }
`

interface IProps {
  readonly guildId: string
}

class CurrentGuild extends React.PureComponent<IProps & RouteComponentProps<RouteProps & IProps>> {
  render() {
    return (
      <Wrapper>
        <Query query={GET_GUILD} variables={{ id: this.props.guildId }}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
            if (error) {
              return <LoadingWrapper>{error.toString()}</LoadingWrapper>
            }
            subscribeToMore({
              document: CHANNELS_SUBSCRIPTION,
              variables: { id: this.props.guildId },
              updateQuery: (_prev, received) => {
                const newData = received.subscriptionData.data.guildChannelsSubscription

                return { guild: { ...data.guild, channels: [...data.guild.channels, newData] } }
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
