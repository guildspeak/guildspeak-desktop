import styled, { css } from 'styled-components'

interface IButton {
  primary?: boolean
  color?: string
  background?: string
}

export default styled.button<IButton>`
  color: ${props => props.color};
  background: ${props => props.background};
  ${props =>
    props.primary &&
    css`
      background: #149f98;
      color: #fff;
    `} display: flex;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  padding: 8px;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    flex: 1 0 auto;
  }
  &:focus {
    outline: none;
  }
`
