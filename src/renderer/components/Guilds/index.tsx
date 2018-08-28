import * as React from 'react'
import Guild from '../Guild'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Wrapper } from './styles'
import { Wrapper as LoadingWrapper } from '../Loading/styles'
import { RouteComponentProps, RouteProps, withRouter } from 'react-router'

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

interface IProps {
  guildId: any
  setGuildId: (guildId) => any
}

class Guilds extends React.Component<IProps & RouteComponentProps<RouteProps>> {
  changeGuild = id => {
    this.props.setGuildId(id)
  }

  render() {
    return (
      <Wrapper>
        <Query query={GET_GUILDS}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
            if (error) return <LoadingWrapper>{error.toString()} guilds</LoadingWrapper>
            return data.guilds.map(el => (
              <Guild
                name={el.name}
                key={el.id}
                // @ts-ignore
                onClick={this.changeGuild(el.id)}
              />
            ))
          }}
        </Query>
      </Wrapper>
    )
  }
}

export default withRouter(Guilds as any)
