import styled from '../../utils/styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-content: center;
  padding: 0px 16px 0px 16px;
  margin: 6px 16px 0px 16px;
  box-shadow: 0px 1px 1px #9e80a2, 0px -1px 1px #9e80a2;
  border-radius: 12px;
`

export const Input = styled.div`
  font-size: 16px;
  padding: 16px 4px 16px 4px;
  width: 100%;
  border: none;
  border-radius: 8px;
`

export const Button = styled.div`
  padding: 0px 4px 0px 4px;
  display: flex;
  font-size: 24px;
  color: ${({ theme }) => theme.accentColor};
  user-select: none;
  cursor: pointer;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
