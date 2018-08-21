import styled, { css } from 'styled-components'

interface IButton {
  primary?: boolean
  color?: string
  background?: string
}

export default styled.button<IButton>`
  color: ${props => props.color};
  background-color: ${props => props.background};
  ${props => props.primary && css`
  background: #6200EE;
  color: white;
`}
  display: inline-block;
  border:0;
  border-radius: 2px;
  font-size: 1em;
  margin-right: 0.25em;
  padding: 0.25em 1em;
`
