import styled from '../../utils/styled-components'
import Modal from 'styled-react-modal'

const Wrapper = styled.div`
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    text-decoration: underline;
  }
  cursor: pointer;
`

const StyledModal = Modal.styled`
  background: #151716;
  color: #cccccc;
  font-size: 16px;
  padding: 16px;
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
  border: none;
  border-radius: 8px;
`

const FriendButton = styled.button`
  height: 36px;
  margin-top: 18px;
  margin-left: 1rem;
  margin-right: 0px;
  width: 10rem;
  padding: 8px;
  display: inline-block;
  border-radius: 4px;
  border: none;
  background: #10b59c;
  color: white;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #14bca3;
  }
`

const UserName = styled.div`
  float: left;
  margin-left: 5px;
  margin-right: 50px;
  margin-top: 28px;
  height: 1rem;
  width: 3rem;
`

export { Wrapper, StyledModal, FriendButton, UserName }
