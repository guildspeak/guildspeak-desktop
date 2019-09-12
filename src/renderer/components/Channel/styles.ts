import styled, { css } from '../../utils/styled-components'

export const Wrapper = styled.div<{ currentChannelId: string; channelId?: string }>`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border-radius: 24px;
  margin: 0px 0px 8px 0px;
  ${props =>
    props.channelId === props.currentChannelId &&
    css`
      background: ${({ theme }) => theme.secondaryTextColor};
      color: ${props.theme.textColor};
    `}

  &:hover {
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.secondaryTextColor};
  }
`

export const ChannelName = styled.div`
  &::before {
    content: '#';
    color: ${({ theme }) => theme.accentColor};
  }
  padding: 8px;
  font-size: 16px;
  padding-top: 0.5rem;
  text-transform: none;
`

export const IconButton = styled.div<{ currentChannelId: string; channelId?: string }>`
  cursor: pointer;
  color: #bdbdbd;
  ${props =>
    props.channelId === props.currentChannelId
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
