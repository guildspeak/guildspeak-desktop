import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
`

const ChannelName = styled.div`
  padding: 4px;
  color: #eeeeee;
  &:hover {
    color: #fff;
    background: rgba(255,255,255,0.24);
  }
  cursor: pointer;
`

export { Wrapper, ChannelName }
