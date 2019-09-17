import React, { useEffect } from 'react'
import GuildContainer from '../../containers/GuildContainer'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Wrapper } from './styles'
import CreateGuildContainer from '../../containers/CreateGuildContainer'
import { Spinner, Center } from '../shared'

const GET_GUILDS = gql`
  query guilds {
    guilds {
      name
      id
      channels {
        id
        name
      }
    }
  }
`

const GUILDS_SUBSCRIPTION = gql`
  subscription guildsSubscription {
    guildsSubscription {
      name
      id
    }
  }
`

const Guilds = () => {
  const { loading, error, data, subscribeToMore } = useQuery(GET_GUILDS)

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: GUILDS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
        const newGuild = subscriptionData.data.guildsSubscription

        const alreadyExist = prev.guilds.some(guild => guild.id === newGuild.id)
        if (alreadyExist) return prev

        return {
          ...prev,
          guilds: [...prev.guilds, newGuild]
        }
      }
    })
    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  }
  if (error) return <div>Error! {error.message}</div>

  return (
    <Wrapper>
      {data.guilds.map(el => (
        <GuildContainer
          key={el.id}
          name={el.name}
          guildId={el.id}
          defaultChannelId={el.channels[0].id}
          defaultChannelName={el.channels[0].name}
        />
      ))}
      <CreateGuildContainer />
    </Wrapper>
  )
}

export default Guilds
