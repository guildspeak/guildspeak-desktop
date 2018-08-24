import * as React from 'react'
import styled from 'styled-components'
import Message from './Message'
import gql from 'graphql-tag'
import { Query, Subscription } from 'react-apollo'
import * as ReactDOM from 'react-dom'
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  flex: 1;
  height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 12px;
    background-color:  #2e2e38;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,.3);
    background-color:  #27272f;
  }
`

const MESSAGE_SUBSCRIPTION = channelID => gql`
subscription {
  channelSubscription(channelId: "${channelID}") {
    node {
      messages(orderBy: createdAt_ASC, last: 30) {
        id
        author {
          username
        }
        createdAt
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

const GET_MESSAGES = channelID => gql`
query {
  channel(id: "${channelID}") {
    messages(orderBy: createdAt_ASC, last: 30) {
      id
      author {
        username
      }
      createdAt
      content
    }
    guildId {
      users {
        id
      }
    }
  }
}`

class Messages extends React.Component<{ parentScroll: any }, { channelID: string }> {
  listRef: any
  shouldScrollBottom: boolean

  constructor (props) {
    super(props)
    this.listRef = React.createRef()
    this.state = {channelID: 'cjl70pho0001008534qtvbqoy'}
  }

  messageMounted = () => {
    if (this.shouldScrollBottom) {
      const node = ReactDOM.findDOMNode(this) as any
      node.scrollTop = node.scrollHeight
    }
  }

  messageWillMount = () => {
    const node = ReactDOM.findDOMNode(this) as any
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight
  }

  render() {
    return (
      <Wrapper>
        <Query query={GET_MESSAGES(this.state.channelID)}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>{error.toString()} messages</div>

            subscribeToMore({
              document: MESSAGE_SUBSCRIPTION(this.state.channelID),
              updateQuery: (prev, data) => {
                return { channel: data.subscriptionData.data.channelSubscription.node }
              }
            })
            return (

              <div >
                { data.channel.messages.map(el => <Message author={el.author} content={el.content} key={el.id} time={el.createdAt} mounted={ this.messageMounted } willMount={ this.messageWillMount } />) }
              </div>
          )
          }}
        </Query>
      </Wrapper>
    )
  }
}

export default Messages
