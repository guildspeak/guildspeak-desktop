import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  justify-content: center;
  height: 24px;
  margin-top: 24px;
  margin-right: 18px;
  margin-bottom: 24px;
`
const Input = styled.div`
  box-sizing: border-box;
  background: #2e2e38;
  color: #cccccc;
  font-size: 16px;
  padding: 16px;
  display: block;
  height: 52px;
  width: 100%;
  border: none;
  border-radius: 12px;
  caret-color: #149f98;
`

export { Wrapper, Input }
