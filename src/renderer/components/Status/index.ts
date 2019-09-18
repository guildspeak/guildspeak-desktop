import styled from '../../utils/styled-components'

export default styled.div<{
  status: 'ONLINE' | 'OFFLINE'
}>`
  position: absolute;
  left: 42px;
  top: 45px;
  content: '';
  background: ${({ status, theme }) =>
    status === 'ONLINE' ? theme.positiveColor : theme.negativeColor};
  width: 10px;
  height: 10px;
  border-radius: 8px;
`
