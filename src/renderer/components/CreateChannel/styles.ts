import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
  user-select: none;
  font-size: 16px;
`
const CreateButton = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: 500;
    background: #2d2d31;
  }
  width: 24px;
  font-size: 24px;
  padding: 4px;
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

export { Wrapper, CreateButton, NameInput }
