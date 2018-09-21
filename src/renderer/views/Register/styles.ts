import styled from 'styled-components'
import Button from '../../components/Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const RegisterForm = styled.div`
  padding: 0;
  margin: 0;
`

const Info = styled.div`
  padding: 8px;
  margin: 0;
  cursor: default;
  font-family: 'Francois One', sans-serif;
  text-transform: uppercase;
  font-size: 18px;
`

const Input = styled.input`
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

const UsernameInput = styled(Input)``

const EmailInput = styled(Input)``

const PasswordInput = styled(Input)``

const RegisterButton = styled(Button)`
  height: 36px;
  margin-top: 12px;
  width: 100%;
  padding: 8px;
  display: inline-block;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #009688;
  }
`

const BackButton = styled(Button)`
  height: 36px;
  margin-top: 12px;
  width: 100%;
  padding: 8px;
  display: inline-block;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #009688;
  }
`

const RegisterLogo = styled.div`
  background: url('renderer/assets/img/icon-gradient-transparent.svg') no-repeat;
  width: 6rem;
  height: 6rem;
  margin-left: 5.7rem;
`

export { Wrapper, RegisterForm, Info, UsernameInput, EmailInput, PasswordInput, RegisterButton, BackButton, RegisterLogo }
