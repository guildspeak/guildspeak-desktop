import styled from '../../utils/styled-components'
import { Scrollbar } from '../shared'
import Status from '../Status'
import Modal from 'styled-react-modal'

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 0px;
  user-select: none;
  flex-direction: column;
  box-shadow: 0.25px 0.5px 0px ${({ theme }) => theme.borderColor};
  border-radius: 12px;
`

export const InnerWrapper = styled(Scrollbar)`
  display: flex;
  user-select: none;
  flex-direction: column;
  padding: 8px;
  height: 100%;
  min-height: 0px;
  overflow-y: auto;
  overflow-x: hidden;
`

export const CurrentGuildWrapper = styled.div`
  min-width: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background: ${({ theme }) => theme.secondaryColor};
  border-radius: 12px 12px 0px 0px;
  margin: 0px 0px 8px 0px;
`

export const UserWrapper = styled.div`
  height: 52px;
  min-width: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 8px;
  margin: 0px 0px 12px 0px;
  cursor: pointer;
  background: ${({ theme }) => theme.grayDarker};
  border-radius: 45px;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0px;
`

export const Username = styled.div`
  display: flex;
  font-size: 16px;
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
  font-weight: 300;
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
  left: 34px;
  top: 37px;
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
