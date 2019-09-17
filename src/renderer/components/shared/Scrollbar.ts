import styled from '../../utils/styled-components'

export default styled.div`
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.gray};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.grayDarker};
  }
`
