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

class CurrentUsers extends React.PureComponent<IProps & RouteComponentProps<RouteProps & IProps>> {
  state = {
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

  render() {
    return (
      <Query query={GET_USERS} variables={{ id: this.props.guildId }}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingWrapper>Loading...</LoadingWrapper>
          if (error) return <LoadingWrapper>{error.toString()} users</LoadingWrapper>
          return (
            <Wrapper>
              <div>Members</div>
              {data.guild.users.map(el => (
                <Username key={el.id} onClick={this.toggleModal}>{el.username}</Username>
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
          <UserName>User Name</UserName>
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
