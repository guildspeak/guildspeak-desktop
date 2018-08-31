import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 36px;
  margin-top: 24px;
  margin-right: 18px;
  margin-bottom: 24px;
`

const Input = styled.div`
  box-sizing: border-box;
  background: #2d2d31;
  color: #cccccc;
  font-size: 16px;
  padding: 16px;
  display: block;
  height: 52px;
  width: 100%;
  border: none;
  border-radius: 8px;
  caret-color: #14bca3;
`

export { Wrapper, Input }
