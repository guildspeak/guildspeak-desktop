import styled from '../../utils/styled-components'

export default styled.div<{
  isOnline: boolean
}>`
  position: absolute;
  left: 42px;
  top: 45px;
  content: '';
  background: ${({ isOnline, theme }) => (isOnline ? theme.positiveColor : theme.negativeColor)};
  width: 10px;
  height: 10px;
  border-radius: 8px;
`
