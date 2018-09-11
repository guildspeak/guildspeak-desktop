import styled, { css } from 'styled-components'

const Wrapper = styled.div``

const ChannelName = styled.div`
  padding: 8px;
  color: #eeeeee;
  font-size: 16px;
  padding-top: 0.5rem;
  cursor: pointer;
  text-transform: none;
`

const IconButton = styled.div`
  cursor: pointer;
  color: #bdbdbd;
  ${props =>
    (props as any).channelId === props.id
      ? css`
          color: #bdbdbd;
        `
      : css`
          color: transparent;
        `};
  &:hover {
    color: #fff;
  }

  font-size: 18px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`

const Channels = styled.div`
  display: flex;
  flex-direction: row;
  ${props => ((props as any).channelId === props.id ? 'background: #2d2d31;font-weight: 500;' : '')} &:hover + Button {
    color: #fff;
    background: #2d2d31;
  }
`

export { Wrapper, ChannelName, IconButton, Channels }
