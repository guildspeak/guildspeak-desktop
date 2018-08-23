import styled, { css } from 'styled-components'

interface IButton {
  primary?: boolean
  color?: string
  background?: string
}

export default styled.button<IButton>`
  color: ${props => props.color};
  background: ${props => props.background};
  ${props => props.primary && css`
    background: #149f98;
    color: #fff;
  `}
  display: flex;
  border:0;
  border-radius: 3px;
  font-size: 1em;
  padding: 0.25em 1em;
  &::before,
  &::after {
    content: '';
    flex: 1 0 auto;
}
`
