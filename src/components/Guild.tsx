import * as React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'react-rasta'
import Channel from './Channel'

const Wrapper = styled(Container)`
`

interface Props {
  name: string
  channels: any[]
}

const Guild: React.SFC<Props> = ({ name, channels }) => (
  <Wrapper>
    <Row>{name}</Row>
    <Row>{channels.map(el => <Channel name={el.name} key={el.id}></Channel>)}</Row>
  </Wrapper>
)

export default Guild

