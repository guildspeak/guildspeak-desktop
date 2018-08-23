import * as React from 'react'
import styled from 'styled-components'
import Message from './Message'
import gql from 'graphql-tag'
import { Query, Subscription } from 'react-apollo'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  flex: 1;
  overflow: auto;
`

const MESSAGE_SUBSCRIPTION = gql`
subscription {
  channelSubscription(channelId:"cjl5gmgip00ga0a18hhttuvan") {
    node {
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
  }
}
`

const GET_MESSAGES = gql`
query {
  channel(id: "cjl5gmgip00ga0a18hhttuvan") {
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

class Messages extends React.Component {
  render() {
    return (
      <Wrapper>
        <Query query={GET_MESSAGES}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>{error.toString()} messages</div>

            subscribeToMore({
              document: MESSAGE_SUBSCRIPTION,
              updateQuery: (prev, data) => {
                return { channel: data.subscriptionData.data.channelSubscription.node }
              }
            })
            return (
              data.channel.messages.map(el => <Message author={el.author} content={el.content} key={el.id} />)
            )
          }}
        </Query>
      </Wrapper>
    )
  }
}

export default Messages
