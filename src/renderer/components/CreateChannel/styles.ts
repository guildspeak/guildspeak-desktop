import styled from 'styled-components'

const Wrapper = styled.div`
  user-select: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`
const CreateButton = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: 500;
    background: #2d2d31;
  }
  font-size: 24px;
  padding: 4px;
`

const NameInput = styled.input`
  background: #2d2d31;
  float: left;
  margin: 0;
  margin-top: -3px;
  margin-right: 4px;
  box-sizing: border-box;
  color: #cccccc;
  font-size: 18px;
  padding: 14px;
  height: 40px;
  width: 70%;
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

export { Wrapper, CreateButton, NameInput, ChannelInput }
