import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper, Username, Buttons, IconButton } from './styles'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'

const GET_ME = gql`
  query {
    me {
      username
    }
  }
`

const CurrentUser = ({ history }: RouteComponentProps) => {
  const handleSettings = () => {
    history.push('/settings')
  }

  const { loading, error, data } = useQuery(GET_ME)

  if (loading) return <div>Loading...</div>
  if (error) return `Error! ${error.message}`

  return (
    <Wrapper>
      <Username>{data.me.username}</Username>
      <Buttons>
        <IconButton onClick={handleSettings} className="material-icons">
          settings
        </IconButton>
      </Buttons>
    </Wrapper>
  )
}

export default withRouter(CurrentUser as React.FunctionComponent)
