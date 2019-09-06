import styled from '../../utils/styled-components'

const Wrapper = styled.div<{ url?: string }>`
  display: flex;
  height: 48px;
  width: 48px;
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
  text-transform: uppercase;
  font-size: 16px;
  &:hover {
    background: ${({ theme }) => theme.accentHoverColor};
    transition: all 0.25s ease-in-out;
  }
`

export { Wrapper }
