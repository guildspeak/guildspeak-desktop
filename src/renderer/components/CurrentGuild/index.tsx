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
interface IProps {
  readonly guildId: string
}

class CurrentGuild extends React.Component<IProps & RouteComponentProps<RouteProps & IProps>> {
  render() {
    return (
      <Wrapper>
        <Query query={GET_GUILD} variables={{ id: this.props.guildId }}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
            if (error) {
              console.error(error)
              if (error.toString().includes('Cannot return null for non-nullable field')) return <LoadingWrapper />
              return <LoadingWrapper>{error.toString()}</LoadingWrapper>
            }
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
