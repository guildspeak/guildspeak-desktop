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
    color: #14bca3;
    background: #2d2d31;
  }
  cursor: pointer;
`

export { Wrapper, Username }
