import React, { useEffect, useRef } from 'react'
import Message from '../Message'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Wrapper, InnerWrapper } from './styles'
import { RouteComponentProps } from 'react-router'
import MessageInputContainer from '../../containers/MessageInputContainer'
import {
  Wrapper as MessageWrapper,
  MessageBubble,
  MessageContentWrapper,
  MessageContent,
  Divider
} from '../Message/styles'
import { Center, Spinner } from '../shared'

type Props = {
  channelId: string
}

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

const Messages = ({ channelId }: Props) => {
  const messagesEndRef = useRef(null)

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

  useEffect(() => {
    if (messagesEndRef && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView()
      return
    }
  }, [data])

  if (loading) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  }
  if (error) return <Center>Error! {error.message}</Center>

  return (
    <Wrapper>
      <InnerWrapper>
        {data.channel.messages.length > 0 ? (
          data.channel.messages.map((el, index) => (
            <div key={el.id}>
              <Message
                messageId={el.id}
                author={el.author}
                content={el.content}
                time={el.createdAt}
              />
              {data.channel.messages.length !== index + 1 && <Divider />}
            </div>
          ))
        ) : (
          <MessageWrapper>
            <MessageBubble>
              <MessageContentWrapper>
                <MessageContent>Write something!</MessageContent>
              </MessageContentWrapper>
            </MessageBubble>
          </MessageWrapper>
        )}
        <div ref={messagesEndRef} />
      </InnerWrapper>
      <MessageInputContainer />
    </Wrapper>
  )
}

export default Messages
