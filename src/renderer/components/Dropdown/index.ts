import styled, { css } from 'styled-components'

interface IDropdownMenu {
  hidden?: boolean
}

interface IDropdownItem {
  hoverColor?: string
}

const Dropdown = styled.div`
  position: relative;
  color: #eeeeee;
  user-select: none;
  z-index: 9999;
`

const DropdownMenu = styled.div<IDropdownMenu>`
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

const DropdownItem = styled.div<IDropdownItem>`
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

export { Dropdown, DropdownMenu, DropdownItem }
