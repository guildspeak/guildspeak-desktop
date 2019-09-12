import styled from '../../utils/styled-components'
import Modal from 'styled-react-modal'

export const Wrapper = styled.div`
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    text-decoration: underline;
  }
  cursor: pointer;
`

export const StyledModal = Modal.styled`
  background: ${({ theme }) => theme.backgroundColor};
  opacity: ${(props: { opacity: number }) => props.opacity};
  font-size: 16px;
  padding: 16px;
  transition: opacity ease 200ms;
  border: none;
  border-radius: 8px;
`
