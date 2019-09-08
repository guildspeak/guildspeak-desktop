import styled from '../../utils/styled-components'

export default styled.div<{
  status: string
}>`
  position: absolute;
  left: 42px;
  top: 45px;
  content: '';
  background: ${({ status, theme }) => theme.positiveColor};
  width: 10px;
  height: 10px;
  border-radius: 8px;
`
