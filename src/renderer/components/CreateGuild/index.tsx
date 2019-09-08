import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Wrapper, CreateButton, NameInput, StyledModal } from './styles'
import Button from '../Button'

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

interface IProps {
  setGuildId: (guildId) => any
  setChannelId: (channelId) => any
}

interface IState {
  name: string
  isOpen: boolean
  opacity: number
}

class CreateGuild extends React.PureComponent<IProps, IState> {
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

  handleCreateGuild = createGuild => async () => {
    this.toggleModal()
    const response = await createGuild({ variables: { name: this.state.name } })
    console.log(response.data.createGuild)
    this.props.setGuildId(response.data.createGuild.id)
    this.props.setChannelId(response.data.createGuild.channels[0].id)
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
          <Mutation mutation={CREATE_GUILD}>
            {(createGuild, { data, error }) => {
              if (error) {
              }

              if (data) {
              }
              return (
                <div>
                  Create your own guild
                  <NameInput onChange={this.handleName} placeholder="name" />
                  <div>
                    <Button primary={true} onClick={this.handleCreateGuild(createGuild)}>
                      Create
                    </Button>
                  </div>
                </div>
              )
            }}
          </Mutation>
        </StyledModal>
      </Wrapper>
    )
  }
}
export default CreateGuild
