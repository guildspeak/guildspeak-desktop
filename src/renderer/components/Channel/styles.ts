import styled from 'styled-components'

const Wrapper = styled.div``

const ChannelName = styled.div`
  margin-left: 8px;
  padding: 4px;
  color: #eeeeee;
  border-radius: 6px;
  margin-top: 1px;
  ${props => ((props as any).channelId === props.id ? 'background: rgba(255,255,255,0.24);' : '')} &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.24);
  }
  cursor: pointer;
  text-transform: none;
`

export { Wrapper, ChannelName }
