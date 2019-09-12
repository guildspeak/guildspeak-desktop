import styled from '../../utils/styled-components'
import Button from '../../components/Button'

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 0px;
  flex-direction: row;
  user-select: none;
`

export const LogoutButton = styled(Button)`
  color: ${({ theme }) => theme.negativeColor};
  font-size: 18px;
`

export const BackButton = styled.div`
  display: flex;
  height: 48px;
  cursor: pointer;
  font-size: 24px;
  padding: 12px;
`

export const Options = styled.div`
  width: 224px;
  display: flex;
  padding: 16px;
  flex-direction: column;
`

export const SettingsView = styled.div`
  flex: 1;
  display: flex;
  padding: 16px;
  flex-direction: column;
`

export const Description = styled.div`
  color: #14bca3;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
`
