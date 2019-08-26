import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  height: 56px;
  padding: 16px;
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
