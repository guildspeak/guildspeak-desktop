import styled from '../../utils/styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px 16px 12px 16px;
`

const Input = styled.div`
  box-shadow: 0px 1px 1px #9e80a2, 0px -1px 1px #9e80a2;
  border-radius: 12px;
  font-size: 16px;
  padding: 16px;
  height: 52px;
  width: 100%;
  border: none;
  border-radius: 8px;
`

export { Wrapper, Input }
