import * as React from 'react'
import styled from 'styled-components'
import Guild from './Guild'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;
`
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
}`

const Guilds = () => (
  <Wrapper>
    <Query query={GET_GUILDS}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>{error.toString()} guilds</div>
        return (
          data.guilds.map((el) => (<Guild name={el.name} key={el.id} channels={el.channels} />))
        )
      }}
    </Query>
  </Wrapper>
)

export default Guilds

