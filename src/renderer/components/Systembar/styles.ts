import styled from '../../utils/styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px 8px 0px 12px;
  background: ${({ theme }) => theme.backgroundColor};
  user-select: none;
`

const WrapperLine = styled.div`
  display: flex;
  flex-direction: row;
  height: 1px;
  background: ${({ theme }) => theme.backgroundColor};
  -webkit-app-region: no-drag;
`

const WrapperItems = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-app-region: drag;
`

const Title = styled.div`
  -webkit-app-region: drag;
  font-family: 'Roboto Condensed', sans-serif;
  padding: 4px 0px 0px 4px;
  font-size: 16px;
`

const Button = styled.div`
  cursor: pointer;
  -webkit-app-region: no-drag;
  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
  font-size: 18px;
  padding: 4px;
`

const CloseButton = styled(Button)`
  &:hover {
    background: #ed2939;
  }
`

const Buttons = styled.div`
  margin-left: auto;
`

export { WrapperLine, Wrapper, WrapperItems, Title, Button, CloseButton, Buttons }
