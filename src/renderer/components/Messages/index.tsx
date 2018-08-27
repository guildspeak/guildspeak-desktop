import * as React from 'react'
import Message from '../Message'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import * as ReactDOM from 'react-dom'
import { Wrapper } from './styles'
import {Wrapper as LoadingWrapper} from '../Loading/styles'

const MESSAGE_SUBSCRIPTION = gql`
  subscription channelSubscription($channelId: ID!) {
    channelSubscription(channelId: $channelId) {
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

const GET_MESSAGES = gql`
  query channel($channelId: ID!) {
    channel(id: $channelId) {
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
`

class Messages extends React.PureComponent<{ match: any }, { channelId: string }> {
  shouldScrollBottom: boolean

  constructor(props) {
    super(props)
    this.state = { channelId: this.props.match.params.channelId }
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this) as any
    node.scrollTop = node.scrollHeight
  }

  messageMounted = () => {
    if (this.shouldScrollBottom) {
      const node = ReactDOM.findDOMNode(this) as any
      node.scrollTop = node.scrollHeight
    }
  }

  messageWillMount = () => {
    const node = ReactDOM.findDOMNode(this) as any
    if (node && node.scrollTop && node.offsetHeight && node.scrollHeight) {
      this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight
    }
  }

  render() {
    return (
      <Wrapper>
        <Query query={GET_MESSAGES} variables={{ channelId: this.state.channelId }}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
            if (error) return <LoadingWrapper>{error.toString()} messages</LoadingWrapper>

            subscribeToMore({
              document: MESSAGE_SUBSCRIPTION,
              variables: { channelId: this.state.channelId },
              updateQuery: (_prev, data) => {
                return { channel: data.subscriptionData.data.channelSubscription.node }
              }
            })
            return (
              <div>
                {data.channel.messages.map(el => (
                  <Message author={el.author} content={el.content} key={el.id} time={el.createdAt} mounted={this.messageMounted} willMount={this.messageWillMount} />
                ))}
              </div>
            )
          }}
        </Query>
      </Wrapper>
    )
  }
}

export default Messages
