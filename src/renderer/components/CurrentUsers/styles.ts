import styled from '../../utils/styled-components'
import { Scrollbar } from '../shared'
import Status from '../Status'
import Modal from 'styled-react-modal'

export const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  position: relative;
  height: 100%;
  min-height: 0px;
  user-select: none;
  flex-direction: column;
  box-shadow: 0.25px 0.5px 0px #9e80a2;
  border-radius: 12px;
`

export const InnerWrapper = styled(Scrollbar)`
  display: flex;
  user-select: none;
  flex-direction: row;
  position: relative;
  height: 100%;
  min-height: 0px;
  overflow-y: auto;
  overflow-x: hidden;
`

export const UserWrapper = styled.div`
  height: 48px;
  min-width: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  position: relative;
  cursor: pointer;
  background: ${({ theme }) => theme.borderColor};
  border-radius: 45px;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  min-width: 0px;
`

export const Username = styled.div`
  display: flex;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const ProcessName = styled.span`
  display: flex;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0px;
  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const UserStatus = styled(Status)`
  left: 33px;
  top: 32px;
`

export const StyledModal = Modal.styled`
  background: ${({ theme }) => theme.backgroundColor};
  opacity: ${(props: { opacity: number }) => props.opacity};
  font-size: 16px;
  padding: 16px;
  transition: opacity ease 200ms;
  border: none;
  border-radius: 8px;
`
