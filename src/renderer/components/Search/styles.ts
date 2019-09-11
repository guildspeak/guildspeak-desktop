import styled from '../../utils/styled-components'

export const Wrapper = styled.input`
  display: flex;
  font-size: 14px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.accentColor};
  padding: 8px;
  border-radius: 45px;
  color: ${({ theme }) => theme.backgroundColor};
  transition: all 0.25s ease-in-out;
  caret-color: ${({ theme }) => theme.backgroundColor};
  margin-left: auto;
  &::placeholder {
    color: ${({ theme }) => theme.backgroundColor};
  }
`
