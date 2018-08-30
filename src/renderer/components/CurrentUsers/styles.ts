import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 8px;
  flex: 1;
  overflow: hidden;
  user-select: none;
`

const Username = styled.div`
  padding: 8px;
  flex: 1;
  overflow: hidden;
  user-select: none;
  &:hover {
    color: #149f98;
    text-decoration: underline;
  }
  cursor: pointer;
`

export { Wrapper, Username }
