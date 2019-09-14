import styled from '../../utils/styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  padding: 16px 24px 16px 24px;
`

export const MessageBubble = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const MessageContentWrapper = styled.div`
  flex-direction: row;
  display: flex;
`

export const MessageContent = styled.div`
  margin-right: auto;
  display: flex;
  text-overflow: ellipsis;
  word-break: break-all;
`

export const Divider = styled.div`
  display: flex;
  margin: 0px 16px;
  height: 1px;
  background: #2e282f;
`

export const DropdownButton = styled.div`
  cursor: pointer;
  user-select: none;
  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
  font-size: 18px;
  padding: 4px;
  border-radius: 12px;
`
