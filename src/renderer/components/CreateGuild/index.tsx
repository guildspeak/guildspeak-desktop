import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Wrapper, CreateButton, NameInput } from './styles'
import { StyledModal } from '../MessageAuthor/styles'
import Button from '../Button'

const CREATE_GUILD = gql`
  mutation createGuild($name: String!) {
    createGuild(name: $name) {
      name
      id
    }
  }
`

interface IState {
  name: string
  isOpen: boolean
  opacity: number
}

class CreateGuild extends React.PureComponent<{}, IState> {
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

  handleCreateGuild = createGuild => () => {
    createGuild({ variables: { name: this.state.name } })
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
                    <Button onClick={this.handleCreateGuild(createGuild)}>Create</Button>
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
