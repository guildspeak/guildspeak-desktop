import styled from 'styled-components'

const Input = styled.input`
  background: hsla(240, 1%, 23%, 0.5);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  color: #fff;
  font-size: 16px;
  padding: 10px 10px 10px 10px;
  display: block;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 0;
  border-bottom: none;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -14px;
    font-size: 12px;
    color: blue;
  }
`

export default Input
