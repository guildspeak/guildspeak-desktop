import styled from 'styled-components'
import Button from '../Button'

const Wrapper = styled.div`
  padding-right: 8px;
  display: flex;
  flex-flow: column;
  flex: 1;
  `

const LogoutButton = styled(Button)`
  background: #33333d;
  color: #eeeeee;
`

export { Wrapper, LogoutButton }
