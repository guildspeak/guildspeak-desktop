import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 18px;
  padding: 4px;
  padding-left: 6px;
  padding-bottom: 8px;
  background: #27272f;
  -webkit-app-region: drag !important;
  box-shadow: 0 1px 5px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);
  user-select: none;
`
const Title = styled.div`
  -webkit-app-region: drag;
  cursor: default;
  font-family: 'Francois One', sans-serif;
`

const Button = styled.div`
  cursor: pointer;
  -webkit-app-region: no-drag !important;
  &:hover {
    background: rgba(255,255,255,0.24);
  }
`

const Buttons = styled.div`
  margin-left: auto;
`

export { Wrapper, Title, Button, Buttons }