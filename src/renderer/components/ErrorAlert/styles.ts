import styled from 'styled-components'

const ErrorNotify = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 0;
  box-sizing: border-box;
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  transition: height 0.2s;
`

export { ErrorNotify }
