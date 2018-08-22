import * as React from 'react'
import styled from 'styled-components'
import { Container } from 'react-rasta'
import Message from './Message'

const Wrapper = styled(Container)`
  overflow: auto;
  height: calc(100vh - 80px);
  background: hsla(240, 1%, 23%, 0.5);
`
import Guild from './Guild'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_MESSAGES = gql`
query {
  channel(id: "cjl2o1xeg00100b18c2r67d3x") {
    messages(orderBy: createdAt_ASC, last: 30) {
      id
      author {
        username
      }
      content
    }
    guildId {
      users {
        id
      }
    }
  }
}`

const Messages = () => (
  <Wrapper>
    <Query query={GET_MESSAGES}>
        {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return (
          data.channel.messages.map(el => <Message content={el.content} key={el.id} />)
        )
      }}
      </Query>

  </Wrapper>
)

export default Messages

