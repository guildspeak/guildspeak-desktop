import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { Wrapper, ChannelName } from './styles'

interface Props {
  id: string
  name: string
  history: any
  match: any
}

const Channel: React.SFC<Props & RouteComponentProps<Props>> = ({ id, name }) => (
  <Wrapper>
    <ChannelName to={`/channel/${id}`}>#{name}</ChannelName>
  </Wrapper>
)

export default withRouter(Channel)
