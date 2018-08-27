import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #33333d;
`

const Button = styled.button`
  background-color: Transparent;
  color: #ff3333;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  &:hover {
    background-color: #ff3333;
    color: #fff;
    border-radius: 6px;
  }
`

export { Wrapper, Button }
