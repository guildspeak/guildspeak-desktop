import styled from 'styled-components'
import Modal from 'styled-react-modal'

const Wrapper = styled.div`
  &:hover {
    color: #149f98;
  }
  cursor: pointer;
`

const StyledModal = Modal.styled`
  width: 35rem;
  height: 15rem;
  display: flex;
  background: #2e2e38;
  color: #cccccc;
  font-size: 16px;
  padding: 16px;
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
  border: none;
  border-radius: 8px;

  #avatar {
    width: 80px;
    height: 80px;
    float: left;
    margin-top: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
    margin-right: 20px;
    border-radius: 20px;
  }

  #username {
    float: right;
    margin-left: 5px;
    margin-right: 50px;
    margin-top: 28px;
    height: 1rem;
    width: 1rem;
    font-weight: bold;
  }

  #btn {
    height: 36px;
    margin-top: 18px;
    margin-left: 10rem;
    maring-right: 0px;
    width: 10rem;
    padding: 8px;
    display: inline-block;
    border-radius: 4px;
    border: none;
    float: right;
    background-color: #3CA374;
    color: white;
    &:focus {
      outline: none;
    }
    &:hover {
     background-color: #3ea878;
    }
}
`
export { Wrapper, StyledModal }
