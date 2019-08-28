import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  min-height: 0px;
  flex-direction: column;
`

const InnerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 12px;
    background-color: #2d2d31;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    background-color: #44444c;
  }
`

export { Wrapper, InnerWrapper }
