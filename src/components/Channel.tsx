import * as React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
const Wrapper = styled.div`
`

const ChannelName = styled(Link)`
  padding: 4px;
  color: #eeeeee;
  &:hover {
    color: #fff;
    background: rgba(255,255,255,0.24);
  }
  cursor: pointer;
`

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
