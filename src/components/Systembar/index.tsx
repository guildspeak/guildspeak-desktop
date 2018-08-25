import * as React from 'react'
import { remote } from 'electron'
import { Wrapper, Title, Button, Buttons } from './styles'

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
      <Button className="material-icons" onClick={maximize}>crop_5_4</Button>
      <Button className="material-icons" onClick={close}>close</Button>
    </Buttons>
  </Wrapper>
)

export default Systembar

