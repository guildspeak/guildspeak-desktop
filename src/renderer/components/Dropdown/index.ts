import styled, { css } from '../../utils/styled-components'

type DropdownMenuProps = {
  hidden?: boolean
}

type DropdownItemMenuProps = {
  hoverColor?: string
}

export const Dropdown = styled.div`
  position: relative;
  color: #eeeeee;
  user-select: none;
  z-index: 9999;
`

export const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  left: -150%;
  padding: 0 0;
  color: #eeeeee;
  background: #2d2d31;
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
  color: #eeeeee;
  white-space: nowrap;
  background: #2d2d31;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => props.hoverColor || '#14bca3'};
    background: #2d2d31;
  }
`
