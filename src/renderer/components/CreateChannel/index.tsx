import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Wrapper, CreateButton, NameInput, ChannelInput, StyledModal } from './styles'
import Button from '../Button'

const CREATE_CHANNEL = gql`
  mutation createChannel($name: String!, $guildId: ID!) {
    createChannel(name: $name, guildId: $guildId) {
      name
      id
    }
  }
`

interface IProps {
  readonly guildId: string
  readonly guildName: string
}

interface IState {
  name: string
  isOpen: boolean
  opacity: number
}

class CreateChannel extends React.PureComponent<IProps, IState> {
  state = {
    name: '',
    isOpen: false,
    opacity: 0
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  afterOpen = () => {
    setTimeout(() => {
      this.setState({ opacity: 1 })
    })
  }

  beforeClose = () => {
    return new Promise(resolve => {
      this.setState({ opacity: 0 })
      setTimeout(resolve, 200)
    })
  }

  handleCreateChannel = createChannel => () => {
    createChannel({ variables: { name: this.state.name, guildId: this.props.guildId } })
    this.toggleModal()
  }

  handleName = e => {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <Wrapper>
        <CreateButton className="material-icons" onClick={this.toggleModal}>
          add
        </CreateButton>
        <StyledModal
          isOpen={this.state.isOpen}
          afterOpen={this.afterOpen}
          beforeClose={this.beforeClose}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
          opacity={this.state.opacity}
        >
          <Mutation mutation={CREATE_CHANNEL}>
            {(createChannel, { data, error }) => {
              return (
                <div>
                  Create channel for {this.props.guildName}
                  <ChannelInput>
                    <NameInput onChange={this.handleName} placeholder="name" />
                    <Button primary={true} onClick={this.handleCreateChannel(createChannel)}>
                      Create
                    </Button>
                  </ChannelInput>
                </div>
              )
            }}
          </Mutation>
        </StyledModal>
      </Wrapper>
    )
  }
}
export default CreateChannel
