import styled from '../../utils/styled-components'

const Wrapper = styled.div`
  height: 72px;
  display: flex;
  margin-top: auto;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  position: relative;
`

const Username = styled.div`
  display: flex;
  cursor: pointer;
  font-family: 'Francois One', sans-serif;
`

const IconButton = styled.div`
  cursor: pointer;
  user-select: none;
  font-size: 24px;
  color: ${({ theme }) => theme.accentColor};
`

const Buttons = styled.div`
  margin-left: auto;
`

export { Wrapper, Username, Buttons, IconButton }
