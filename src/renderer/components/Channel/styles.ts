import styled from 'styled-components'

const Wrapper = styled.div``

const ChannelName = styled.div`
  padding: 8px;
  color: #eeeeee;
  font-size: 16px;
  ${props => ((props as any).channelId === props.id ? 'background: #2d2d31;font-weight: 500;' : '')} &:hover {
    color: #fff;
    background: #2d2d31;
  }
  cursor: pointer;
  text-transform: none;
`

export { Wrapper, ChannelName }
