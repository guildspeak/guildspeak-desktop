import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div``

const ChannelName = styled.div`
  margin-left: 5px;
  padding: 4px;
  color: #eeeeee;
  ${props => ((props as any).channelId === props.id ? 'background: rgba(255,255,255,0.24);' : '')} &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.24);
  }
  cursor: pointer;
  border-radius: 3px;
  font-weight: normal;
  text-transform: none;
`

export { Wrapper, ChannelName }
