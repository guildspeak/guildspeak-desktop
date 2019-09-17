import styled from '../../utils/styled-components'
import { Editor } from 'slate-react'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-content: center;
  padding: 0px 16px 0px 16px;
  margin: 6px 16px 0px 16px;
  box-shadow: 0px 1px 1px ${({ theme }) => theme.borderColor}, 0px -1px 1px ${({ theme }) => theme.borderColor};
  border-radius: 12px;
`

export const Input = styled(Editor)`
  display: flex;
  word-wrap: break-word;
  word-break: break-all;
  flex: 1;
  max-height: 150px;
  overflow-y: auto;
  font-size: 16px;
  padding: 16px 4px 16px 4px;
  border: none;
  border-radius: 8px;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
    background-color: #2d2d31;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    background-color: #44444c;
  }
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
