import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Wrapper, Username, StyledModal, FriendButton, UserName, Avatar } from './styles'
import { Wrapper as LoadingWrapper } from '../Loading/styles'
import { RouteComponentProps, RouteProps } from 'react-router'

const GET_USERS = gql`
  query guild($id: ID!) {
    guild(id: $id) {
      id
      users {
        id
        username
      }
    }
  }
`
interface IProps {
  readonly guildId: string
}

interface IState {
  isOpen: boolean
  opacity: number
  selectedUser: string
}

class CurrentUsers extends React.PureComponent<IProps & RouteComponentProps<RouteProps & IProps>, IState> {
  state = {
    isOpen: false,
    opacity: 0,
    selectedUser: ''
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  selectCurrentUser = (username: string) => e => {
    this.setState({
      selectedUser: username
    })
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

  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc, false)
  }

  handleEsc = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }

  render() {
    return (
      <Query query={GET_USERS} variables={{ id: this.props.guildId }}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
          if (error) {
            console.error(error)
            if (error.toString().includes('Cannot return null for non-nullable field')) return <LoadingWrapper></LoadingWrapper>
            return <LoadingWrapper>{error.toString()}</LoadingWrapper>
          }
          return (
            <Wrapper>
              <div>Members</div>
              {data.guild.users.map(el => (
                <div onClick={this.toggleModal} key={el.id}>
                  <Username onClick={this.selectCurrentUser(el.username)}>{el.username}</Username>
                </div>
              ))}
              <StyledModal
                isOpen={this.state.isOpen}
                afterOpen={this.afterOpen}
                beforeClose={this.beforeClose}
                onBackgroundClick={this.toggleModal}
                onEscapeKeydown={this.toggleModal}
                opacity={this.state.opacity}
              >
                <Avatar>
                  <img src="https://i.kym-cdn.com/entries/icons/facebook/000/021/950/Pink_guy.jpg" />
                </Avatar>
                <UserName>{this.state.selectedUser}</UserName>
                <FriendButton>Send Friend Request</FriendButton>
              </StyledModal>
            </Wrapper>
          )
        }}
      </Query>
    )
  }
}
export default CurrentUsers
