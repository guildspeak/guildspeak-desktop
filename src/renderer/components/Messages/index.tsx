import * as React from 'react'
import Message from '../Message'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import * as ReactDOM from 'react-dom'
import { Wrapper, InnerWrapper } from './styles'
import { Wrapper as LoadingWrapper } from '../Loading/styles'
import { RouteComponentProps, RouteProps } from 'react-router'
import MessageInputContainer from '../../containers/MessageInputContainer'

const MESSAGE_SUBSCRIPTION = gql`
  subscription channelSubscription($id: ID!) {
    channelSubscription(id: $id) {
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

const GET_MESSAGES = gql`
  query channel($id: ID!) {
    channel(id: $id) {
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

interface IProps {
  readonly channelId: string
}

interface IState {
  channelId: string
  shouldScrollBottom: boolean
}

class Messages extends React.Component<IProps & RouteComponentProps<RouteProps & IProps>, IState> {
  state = {
    channelId: this.props.match.params.channelId,
    shouldScrollBottom: true
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this) as any
    node.scrollTop = node.scrollHeight
  }

  messageMounted = () => {
    if (this.state.shouldScrollBottom) {
      const node = ReactDOM.findDOMNode(this) as any
      node.scrollTop = node.scrollHeight
    }
  }

  messageWillMount = () => {
    const node = ReactDOM.findDOMNode(this) as any
    if (node) {
      this.state.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight
    }
  }

  render() {
    return (
      <Query query={GET_MESSAGES} variables={{ id: this.state.channelId }}>
        {({ loading, error, data, subscribeToMore }) => {
          if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
          if (error) {
            return (
              <LoadingWrapper>
                No guilds found. Join a guild or create a new one using "+" button above.
                {error.toString()}
              </LoadingWrapper>
            )
          }

          subscribeToMore({
            document: MESSAGE_SUBSCRIPTION,
            variables: { id: this.state.channelId },
            updateQuery: (_prev, data) => {
              return { channel: data.subscriptionData.data.channelSubscription }
            }
          })
          return (
            <Wrapper>
              <InnerWrapper>
                {data.channel.messages.map(el => (
                  <Message
                    author={el.author}
                    content={el.content}
                    key={el.id}
                    time={el.createdAt}
                    mounted={this.messageMounted}
                    willMount={this.messageWillMount}
                  />
                ))}
              </InnerWrapper>
              <MessageInputContainer />
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}

export default Messages
