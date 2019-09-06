import styled from '../../utils/styled-components'

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
  margin-left: 5px;
  padding: 6px 5px 5px 5px;
  border-radius: 2px;
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

export { Wrapper, CreateButton, NameInput, ChannelInput }
