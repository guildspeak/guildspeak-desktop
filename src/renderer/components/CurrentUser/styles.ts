import styled from '../../utils/styled-components'

export const Wrapper = styled.div`
  height: 72px;
  display: flex;
  margin-top: auto;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px 6px 8px;
  position: relative;
`

export const Username = styled.div`
  display: flex;
  cursor: pointer;
 
`

export const IconButton = styled.div`
  cursor: pointer;
  user-select: none;
  font-size: 24px;
  color: ${({ theme }) => theme.accentColor};
`

export const Buttons = styled.div`
  margin-left: auto;
`
