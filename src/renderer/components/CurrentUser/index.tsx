import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper, Username, Buttons, IconButton } from './styles'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'
import Loading from '../Loading'

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

  if (loading) return <Loading />
  if (error) return <div>Error! {error.message}</div>

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
