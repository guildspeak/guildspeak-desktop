import styled, { keyframes } from '../../utils/styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div<{ size?: string }>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid ${props => props.theme.accentColor};
  border-right: 2px solid ${props => props.theme.accentColor};
  border-bottom: 2px solid ${props => props.theme.accentColor};
  border-left: 2px solid ${props => props.theme.accentHoverColor};
  background: transparent;
  width: ${({ size }) => size || '24px'};
  height: ${({ size }) => size || '24px'};
  border-radius: 50%;
`

export const LoaderWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 8px;
  align-items: flex-start;
  justify-content: center;
`

export default Spinner
