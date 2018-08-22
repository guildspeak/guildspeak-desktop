import * as React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'react-rasta'
import Guild from './Guild'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

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

const Wrapper = styled(Container)`
  overflow: auto;
  height: calc(100vh - 40px);
  background: hsla(240, 1%, 23%, 0.5);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`


const Guilds = () => (
  <Wrapper>
    <Row>Guilds:</Row>
    <Query query={GET_GUILDS}>
        {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return (
          data.guilds.map((el) => (<Guild name={el.name} channels={el.channels} />))
        )
      }}
      </Query>
  </Wrapper>
)

export default Guilds

