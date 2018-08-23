import * as React from 'react'
import styled from 'styled-components'
import Channel from './Channel'

const Wrapper = styled.div`
`

interface Props {
  name: string
  channels: any[]
}

const Guild: React.SFC<Props> = ({ name, channels }) => (
  <Wrapper>
    <div>{name}</div>
    <div>{channels.map(el => <Channel name={el.name} key={el.id}></Channel>)}</div>
  </Wrapper>
)

export default Guild

