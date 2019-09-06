import styled, { css } from '../../utils/styled-components'

const Wrapper = styled.div<{ id?: string; channelId?: string }>`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border: 1px solid #9e80a2;
  border-radius: 24px;
  margin: 0px 0px 8px 0px;
  ${props =>
    props.channelId === props.id &&
    css`
      background: #2d2d31;
      color: ${props.theme.textColor};
    `}

  &:hover {
    color: ${({ theme }) => theme.textColor};
    background: #2d2d31;
  }
`

const ChannelName = styled.div`
  &::before {
    content: '#';
    color: ${({ theme }) => theme.accentColor};
  }
  padding: 8px;
  font-size: 16px;
  padding-top: 0.5rem;
  text-transform: none;
`

const IconButton = styled.div<{ id?: string; channelId?: string }>`
  cursor: pointer;
  color: #bdbdbd;
  ${props =>
    props.channelId === props.id
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

export { Wrapper, ChannelName, IconButton }
