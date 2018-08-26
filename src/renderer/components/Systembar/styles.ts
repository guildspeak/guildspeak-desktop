import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;
  padding-left: 4px;
  background: #27272f;
  -webkit-app-region: drag !important;
  box-shadow: 0 1px 5px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);
  user-select: none;
`
const Title = styled.div`
  -webkit-app-region: drag;
  cursor: default;
  font-family: 'Francois One', sans-serif;
  padding-top: 2px;
  padding-left: 2px;
`

const Button = styled.div`
  cursor: pointer;
  -webkit-app-region: no-drag !important;
  &:hover {
    background: rgba(255,255,255,0.24);
  }
  font-size: 18px;
  padding: 4px;
`

const Buttons = styled.div`
  margin-left: auto;
`

export { Wrapper, Title, Button, Buttons }
