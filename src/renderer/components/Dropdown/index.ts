import styled, { css } from '../../utils/styled-components'

type DropdownMenuProps = {
  hidden?: boolean
}

type DropdownItemMenuProps = {
  hoverColor?: string
}

export const Dropdown = styled.div`
  position: relative;
  user-select: none;
  z-index: 9999;
`

export const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  left: -150%;
  padding: 0 0;
  background: ${({ theme }) => theme.secondaryColor};
  border-radius: 4px;
  ${props =>
    props.hidden
      ? css`
          display: none;
        `
      : css`
          display: block;
        `};
`

export const DropdownItem = styled.div<DropdownItemMenuProps>`
  border-radius: 4px;
  padding: 8px;
  font-size: 12px;
  clear: both;
  white-space: nowrap;
  background: ${({ theme }) => theme.secondaryColor};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => props.hoverColor || '#14bca3'};
    background: ${({ theme }) => theme.secondaryColor};
  }
`
