import styled from '../../utils/styled-components'

export default styled.div<{ url?: string; size?: number }>`
  display: flex;
  height: ${({ size }) => (size ? `${size}px` : '48px')};
  width: ${({ size }) => (size ? `${size}px` : '48px')};
  background: ${({ theme, url }) => (url ? `url(${url})` : theme.secondaryTextColor)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 48px;
  margin: 0px 8px 0px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  text-transform: uppercase;
  font-size: 16px;
`
