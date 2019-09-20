import styled from '../../utils/styled-components'
import logo from '../../assets/img/icon-gradient-transparent.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0px;
  padding: 8px 8px 0px 12px;
  background: ${({ theme }) => theme.backgroundColor};
  user-select: none;
`

export const WrapperLine = styled.div`
  display: flex;
  flex-direction: row;
  height: 1px;
  background: ${({ theme }) => theme.backgroundColor};
  -webkit-app-region: no-drag;
`

export const WrapperItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-app-region: drag;
`

export const Title = styled.div`
  -webkit-app-region: drag;
  padding: 4px 0px 0px 4px;
  font-size: 16px;
  font-weight: 500;
`

export const Logo = styled.div`
  -webkit-app-region: drag;
  margin: 3px 2px 0px 4px;
  width: 16px;
  height: 16px;
  background-image: url(${logo});
`

export const Button = styled.div`
  cursor: pointer;
  -webkit-app-region: no-drag;
  &:hover {
    background: ${({ theme }) => theme.secondaryColor};
  }
  font-size: 18px;
  padding: 4px;
`

export const CloseButton = styled(Button)`
  &:hover {
    background: #ed2939;
  }
`

export const Buttons = styled.div`
  margin-left: auto;
`
