import styled from '../../utils/styled-components'
import Modal from 'styled-react-modal'

const Wrapper = styled.div`
  user-select: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 4px;
`

const CreateButton = styled.div`
  display: flex;
  height: 24px;
  width: 24px;
  &:hover {
    background: ${({ theme }) => theme.accentHoverColor};
    transition: all 0.25s ease-in-out;
  }
  border-radius: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
`

const NameInput = styled.input`
  background: #2d2d31;
  margin-top: 8px;
  box-sizing: border-box;
  color: #cccccc;
  font-size: 18px;
  padding: 14px;
  display: block;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 8px;
  border-bottom: none;
  caret-color: #14bca3;
  &:focus {
    outline: none;
  }
`

const ChannelInput = styled.div`
  padding-top: 10px;
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

export { Wrapper, CreateButton, NameInput, ChannelInput }
