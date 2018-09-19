import styled from 'styled-components'

const Wrapper = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  padding: 8px;
`

const Username = styled.div`
  color: #eeeeee;
  &:hover {
    color: #fff;
  }
  cursor: pointer;
  font-family: 'Francois One', sans-serif;
`

const IconButton = styled.div`
  cursor: pointer;
  font-size: 18px;
`

const Buttons = styled.div`
  margin-left: auto;
`

export { Wrapper, Username, Buttons, IconButton }
