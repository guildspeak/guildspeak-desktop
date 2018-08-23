import styled from 'styled-components'

const Input = styled.input`
  background: #373740;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);
  color: #cccccc;
  font-size: 16px;
  padding: 10px;
  display: block;
  height: 36px;
  width: 100%;
  border: none;
  border-radius: 12px;
  border-bottom: none;
  caret-color: #149f98;
  &:focus {
    outline: none;
  }
`

export default Input
