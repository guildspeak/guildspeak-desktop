import styled from '../../utils/styled-components'

const Wrapper = styled.div`
  height: 36px;
  display: flex;
  margin-top: auto;
  flex-direction: row;
  padding: 8px;
`

const Username = styled.div`
  cursor: pointer;
  font-family: 'Francois One', sans-serif;
`

const IconButton = styled.div`
  cursor: pointer;
  font-size: 18px;
  color: ${({ theme }) => theme.accentColor};
`

const Buttons = styled.div`
  margin-left: auto;
`

export { Wrapper, Username, Buttons, IconButton }
