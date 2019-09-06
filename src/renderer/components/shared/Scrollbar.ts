import styled from '../../utils/styled-components'

export default styled.div`
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 8px;
    background-color: #2d2d31;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    background-color: #44444c;
  }
`
