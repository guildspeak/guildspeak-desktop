import styled from 'styled-components'
import Modal from 'styled-react-modal'

const Wrapper = styled.div`
  padding: 8px;
  flex: 1;
  overflow: hidden;
  user-select: none;
`

const Username = styled.div`
  padding: 8px;
  flex: 1;
  overflow: hidden;
  user-select: none;
  &:hover {
    color: #14bca3;
    background: #2d2d31;
  }
  cursor: pointer;
`
const StyledModal = Modal.styled`
  width: 35rem;
  height: 15rem;
  display: flex;
  background: #202020;
  color: #cccccc;
  font-size: 16px;
  padding: 16px;
  transition: opacity ease 200ms;
  border: none;
  border-radius: 8px;
`

const FriendButton = styled.button`
  height: 36px;
  margin-top: 18px;
  margin-left: 13rem;
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
  float: right;
  margin-left: 5px;
  margin-right: 50px;
  margin-top: 28px;
  height: 1rem;
  width: 1rem;
`
const Avatar = styled.div`
  width: 80px;
  height: 80px;
  float: left;
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 20px;
  border-radius: 20px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 60px;
  }
`


export { Wrapper, Username, StyledModal, FriendButton, UserName, Avatar }
