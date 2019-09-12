import styled from '../../utils/styled-components'
import { Scrollbar } from '../shared'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  min-height: 0px;
  flex-direction: column;
  user-select: none;
  font-size: 16px;
  box-shadow: 0px 1px 1px #9e80a2;
  border-radius: 12px;
`

export const ChannelsWrapper = styled(Scrollbar)`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 16px;
  padding: 16px;
`
