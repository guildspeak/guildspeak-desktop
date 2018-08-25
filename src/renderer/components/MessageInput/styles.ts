import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  justify-content: center;
  height: 24px;
  margin-top: 24px;
  margin-right: 18px;
  margin-bottom: 56px;
`
const Input = styled.input`
  box-sizing: border-box;
  background: #2e2e38;
  color: #cccccc;
  font-size: 16px;
  padding: 12px;
  display: block;
  height: 52px;
  width: 100%;
  border: none;
  border-radius: 12px;
  border-bottom: none;
  caret-color: #149f98;
  &:focus {
    outline: none;
  }
`

export { Wrapper, Input }