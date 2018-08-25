import styled from 'styled-components'
import Button from '../Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const LoginForm = styled.div`
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

const ContinueButton = styled(Button)`
  width: 100%;
  height: 36px;
  margin-top: 12px;
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

export { Wrapper, LoginForm, Info, ContinueButton }