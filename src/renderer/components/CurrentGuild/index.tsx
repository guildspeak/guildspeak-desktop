import * as React from 'react'
import Guild from '../Guild'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Wrapper } from './styles'
import { Wrapper as LoadingWrapper } from '../Loading/styles'

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

const Guilds = () => (
  <Wrapper>
    <Query query={GET_GUILDS}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
        if (error) return <LoadingWrapper>{error.toString()} guilds</LoadingWrapper>
        return data.guilds.map(el => <Guild name={el.name} key={el.id} channels={el.channels} />)
      }}
    </Query>
  </Wrapper>
)

export default Guilds
