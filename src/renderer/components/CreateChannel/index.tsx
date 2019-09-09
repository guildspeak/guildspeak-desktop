import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { Wrapper, CreateButton, NameInput, ChannelInput, StyledModal } from './styles'
import Button from '../Button'

type Props = {
  guildId: string
  guildName: string
}

const CREATE_CHANNEL = gql`
  mutation createChannel($name: String!, $guildId: ID!) {
    createChannel(name: $name, guildId: $guildId) {
      name
      id
    }
  }
`

const CreateChannel = ({ guildName, guildId }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [opacity, setOpacity] = useState<number>(0)
  const [name, setName] = useState<string>('')

  const toggleModal = () => setOpen(!isOpen)
  const afterOpen = () => setOpacity(1)
  const beforeClose = () => setOpacity(0)

  const handleCreateChannel = createChannel => () => {
    createChannel({ variables: { name, guildId } })
    toggleModal()
  }

  const handleName = e => setName(e.target.value)

  const [createChannel] = useMutation(CREATE_CHANNEL)

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
          Create channel for {guildName}
          <ChannelInput>
            <NameInput onChange={handleName} placeholder="name" />
            <Button primary={true} onClick={handleCreateChannel(createChannel)}>
              Create
            </Button>
          </ChannelInput>
        </div>
      </StyledModal>
    </Wrapper>
  )
}

export default CreateChannel
