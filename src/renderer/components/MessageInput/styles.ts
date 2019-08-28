import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px 16px 12px 16px;
`

const Input = styled.div`
  background: #2d2d31;
  color: #cccccc;
  font-size: 16px;
  padding: 16px;
  height: 52px;
  width: 100%;
  border: none;
  border-radius: 8px;
  caret-color: #14bca3;
`

export { Wrapper, Input }
