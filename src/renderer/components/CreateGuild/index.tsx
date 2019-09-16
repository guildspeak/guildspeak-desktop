import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { Wrapper, CreateButton, NameInput, StyledModal } from './styles'
import Button from '../Button'

type Props = {
  setGuildId: (guildId: string) => void
  setChannelId: (channelId: string) => void
}

const CREATE_GUILD = gql`
  mutation createGuild($name: String!) {
    createGuild(name: $name) {
      name
      id
      channels {
        id
      }
    }
  }
`

const CreateGuild = ({ setChannelId, setGuildId }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [opacity, setOpacity] = useState<number>(0)
  const [name, setName] = useState<string>('')

  const toggleModal = () => setOpen(!isOpen)
  const afterOpen = () => setOpacity(1)
  const beforeClose = () => setOpacity(0)

  const handleName = e => setName(e.target.value)

  const [createGuild] = useMutation(CREATE_GUILD)

  const handleCreateGuild = createGuild => async () => {
    toggleModal()
    const response = await createGuild({ variables: { name } })
    setGuildId(response.data.createGuild.id)
    setChannelId(response.data.createGuild.channels[0].id)
  }

  return (
    <Wrapper>
      <CreateButton className="material-icons" onClick={toggleModal}>
        add
      </CreateButton>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
      >
        <div>
          Create your own guild
          <NameInput onChange={handleName} placeholder="name" />
          <div>
            <Button primary={true} onClick={handleCreateGuild(createGuild)}>
              Create
            </Button>
          </div>
        </div>
      </StyledModal>
    </Wrapper>
  )
}

export default CreateGuild
