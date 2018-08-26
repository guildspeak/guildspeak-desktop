import styled from 'styled-components'
import Modal from 'styled-react-modal'

const Wrapper = styled.div`
  &:hover {
    color: #149f98;
  }
  cursor: pointer;
`

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2e2e38;
  color: #cccccc;
  font-size: 16px;
  padding: 16px;
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
  padding: 16px;
  border: none;
  border-radius: 8px;
`

export { Wrapper, StyledModal }
