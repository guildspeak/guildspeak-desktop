import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 12px;
    background-color: #2e2e38;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    background-color: #27272f;
  }
`

export { Wrapper }
