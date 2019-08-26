import React, { useEffect } from 'react'
import Message from '../Message'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'
import { Wrapper, InnerWrapper } from './styles'
import { RouteComponentProps } from 'react-router'
import MessageInputContainer from '../../containers/MessageInputContainer'
import Loading from '../Loading'

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
    }
  }
`

interface IProps {
  readonly channelId: string
}

const Messages = ({ channelId }: IProps & RouteComponentProps) => {
  const { loading, error, data, subscribeToMore } = useQuery(GET_MESSAGES, {
    variables: { id: channelId }
  })

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: MESSAGE_SUBSCRIPTION,
      variables: { id: channelId },
      updateQuery: (_prev, data) => {
        return { channel: data.subscriptionData.data.channelSubscription }
      }
    })
    return () => unsubscribe()
  }, [])

  if (loading) return <Loading />
  if (error) return <div>Error! {error.message}</div>

  return (
    <Wrapper>
      <InnerWrapper>
        {data.channel.messages.map(el => (
          <Message author={el.author} content={el.content} key={el.id} time={el.createdAt} />
        ))}
      </InnerWrapper>
      <MessageInputContainer />
    </Wrapper>
  )
}

export default Messages
