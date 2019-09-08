import styled from '../../utils/styled-components'
import { Scrollbar } from '../shared'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  min-height: 0px;
  flex-direction: column;
  padding: 0px 0px 8px 0px;
`

const InnerWrapper = styled(Scrollbar)`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`

export { Wrapper, InnerWrapper }
