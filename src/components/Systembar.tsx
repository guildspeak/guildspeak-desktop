import * as React from 'react'
import { remote } from 'electron'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 18px;
  padding: 4px;
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

const minimize = () => {
  const window = remote.BrowserWindow.getFocusedWindow()
  window.minimize()
}

const maximize = () => {
  const window = remote.BrowserWindow.getFocusedWindow()
  if (window.isMaximized()) {
    window.unmaximize()
  } else {
    window.maximize()
  }
}

const close = () => {
  const window = remote.BrowserWindow.getFocusedWindow()
  window.close()
}

const Systembar = () => (
  <Wrapper>
    <Title>GUILDSPEAK</Title>
    <Buttons>
      <Button className="material-icons" onClick={minimize}>remove</Button>
      <Button className="material-icons" onClick={maximize}>crop_square</Button>
      <Button className="material-icons" onClick={close}>close</Button>
    </Buttons>
  </Wrapper>
)

export default Systembar

