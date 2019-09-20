import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { Wrapper, JoinButton, NameInput, StyledModal } from './styles'
import Button from '../Button'

type Props = {
  setGuild: (guildId: string, guildName: string) => void
  setChannel: (channelId: string, channelName: string) => void
}

const JOIN_GUILD = gql`
  mutation joinGuild($guildId: ID!) {
    joinGuild(guildId: $guildId) {
      name
      id
      channels {
        id
        name
      }
    }
  }
`

const JoinGuild = ({ setChannel, setGuild }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [opacity, setOpacity] = useState<number>(0)
  const [guildId, setGuildId] = useState<string>('')

  const toggleModal = () => setOpen(!isOpen)
  const afterOpen = () => setOpacity(1)
  const beforeClose = () => setOpacity(0)

  const handleGuildId = e => setGuildId(e.target.value)

  const [joinGuild] = useMutation(JOIN_GUILD)

  const handleJoinGuild = joinGuild => async () => {
    toggleModal()
    const { data } = await joinGuild({ variables: { guildId } })
    setGuild(data.joinGuild.id, data.joinGuild.name)
    setChannel(data.joinGuild.channels[0].id, data.joinGuild.channels[0].name)
  }

  return (
    <Wrapper title="Join to Guild">
      <JoinButton className="material-icons" onClick={toggleModal}>
        search
      </JoinButton>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
      >
        <div>
          Join to guild
          <NameInput onChange={handleGuildId} placeholder="guild id" />
          <div>
            <Button primary={true} onClick={handleJoinGuild(joinGuild)}>
              Join
            </Button>
          </div>
        </div>
      </StyledModal>
    </Wrapper>
  )
}

export default JoinGuild
