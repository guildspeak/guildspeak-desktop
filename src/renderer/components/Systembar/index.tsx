import React from 'react'
import { remote } from 'electron'
import { Wrapper, Title, Button, Buttons, CloseButton, WrapperLine, WrapperItems } from './styles'

const Systembar = () => {
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

  return (
    <Wrapper>
      <WrapperLine />
      <WrapperItems>
        <Title>GUILDSPEAK</Title>
        <Buttons>
          <Button className="material-icons" onClick={minimize}>
            remove
          </Button>
          <Button className="material-icons" onClick={maximize}>
            crop_square
          </Button>
          <CloseButton className="material-icons" onClick={close}>
            close
          </CloseButton>
        </Buttons>
      </WrapperItems>
    </Wrapper>
  )
}

export default Systembar
