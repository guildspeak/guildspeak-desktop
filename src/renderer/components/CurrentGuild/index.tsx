import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Wrapper } from './styles'
import { Wrapper as LoadingWrapper } from '../Loading/styles'
import ChannelContainer from '../../containers/ChannelContainer'

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

const CurrentGuild = () => (
  <Wrapper>
    <Query query={GET_GUILDS}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
        if (error) return <LoadingWrapper>{error.toString()} guilds</LoadingWrapper>
        return data.guilds.map(el => (
          <div key={el.id}>
            {el.channels.map(el => (
              <ChannelContainer name={el.name} id={el.id} key={el.id} />
            ))}
          </div>
        ))
      }}
    </Query>
  </Wrapper>
)

export default CurrentGuild
