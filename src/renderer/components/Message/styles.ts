import styled from '../../utils/styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  padding: 16px 16px 0px 16px;
`

export const MessageBubble = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  word-break: break-all;
`

export const MessageContentWrapper = styled.div`
  flex-direction: row;
  display: flex;
`

export const MessageContent = styled.div`
  margin-right: auto;
  display: flex;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.borderColor};
`

export const DropdownButton = styled.div`
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
  font-size: 18px;
  padding: 4px;
  border-radius: 12px;
`
