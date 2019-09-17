import styled, { css } from '../../utils/styled-components'

type Props = {
  primary?: boolean
  color?: string
  background?: string
}

export default styled.button<Props>`
  color: ${props => props.color || props.theme.textColor};
  background: ${props => props.background || props.theme.backgroundColor};
  ${props =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.accentColor};
      color: ${({ theme }) => theme.textColor};
    `}
  display: flex;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.backgroundColor};
  }
  &::before,
  &::after {
    content: '';
    flex: 1 0 auto;
  }
  &:focus {
    outline: none;
  }
`
