import { app, BrowserWindow, protocol } from 'electron'
import * as path from 'path'

let win: BrowserWindow | null

const isWindows = process.platform === 'win32'

function createWindow() {
  win = new BrowserWindow({
    width: 1152,
    height: 648,
    minWidth: 896,
    minHeight: 504,
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
    isWindows ? win.loadURL('file:///index.html') : win.loadURL('file://index.html')
  }

  win.show()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  // Fixes loading static and lazy Webpack chunks
  protocol.interceptFileProtocol(
    'file',
    (request, callback) => {
      const reqUrl = request.url.substr(isWindows ? 8 : 7)

      callback(path.normalize(`${__dirname}/${reqUrl}`))
    },
    err => {
      if (err) console.error('Failed to register protocol')
    }
  )
  createWindow()
})

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
