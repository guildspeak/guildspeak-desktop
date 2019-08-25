import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import { config } from 'dotenv'

if (process.env.NODE_ENV === 'development') {
  config()
}

let win: BrowserWindow | null

const createWindow = async () => {
  win = new BrowserWindow({
    width: 1152,
    height: 648,
    minWidth: 800,
    minHeight: 600,
    title: 'Guildspeak',
    frame: false,
    backgroundColor: '#202020',
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  })

  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools()
    win.loadURL('http://localhost:5000/index.html')
  } else {
    win.loadURL(path.join('file://', app.getAppPath(), 'build/index.html'))
  }

  win.show()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
