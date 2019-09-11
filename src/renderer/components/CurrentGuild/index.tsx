import React, { useEffect } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Wrapper, ChannelsWrapper } from './styles'
import ChannelContainer from '../../containers/ChannelContainer'
import { RouteComponentProps } from 'react-router-dom'
import CreateChannel from '../CreateChannel'
import Loading from '../Loading'

type Props = {
  guildId: string
}

const GET_GUILD = gql`
  query guild($id: ID!) {
    guild(id: $id) {
      id
      name
      channels {
        id
        name
      }
    }
  }
`

const CHANNELS_SUBSCRIPTION = gql`
  subscription guildChannelsSubscription($id: ID!) {
    guildChannelsSubscription(id: $id) {
      id
      name
    }
  }
`

const CurrentGuild = ({ guildId }: Props & RouteComponentProps) => {
  const { loading, error, data, subscribeToMore } = useQuery(GET_GUILD, {
    variables: { id: guildId }
  })

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: CHANNELS_SUBSCRIPTION,
      variables: { id: guildId },
      updateQuery: (prev, { subscriptionData }) => {
        const newChannel = subscriptionData.data.guildChannelsSubscription
        const alreadyExist = prev.guild.channels.some(channel => channel.id === newChannel.id)
        if (alreadyExist) {
          return {
            guild: { ...data.guild, channels: [...data.guild.channels, prev] }
          }
        }

        return {
          guild: { ...data.guild, channels: [...data.guild.channels, newChannel] }
        }
      }
    })
    return () => unsubscribe()
  }, [data])

  if (loading) return <Loading />
  if (error) return <div>Error! {error.message}</div>

  return (
    <Wrapper>
      <ChannelsWrapper>
        {data.guild.channels.map(el => (
          <ChannelContainer name={el.name} channelId={el.id} key={el.id} />
        ))}
      </ChannelsWrapper>
      <CreateChannel guildId={guildId} guildName={data.guild.name} />
    </Wrapper>
  )
}

export default CurrentGuild
