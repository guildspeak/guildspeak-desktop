import { app, BrowserWindow, protocol, ipcMain } from 'electron'
import * as path from 'path'
import { LOAD_RUNNING_PROCESSES, BackgroundProcess, TaskList } from '../ipc'
import tasklist from 'tasklist'

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
    backgroundColor: '#151716',
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

const processesWhiteList: BackgroundProcess[] = [
  {
    imageName: 'code',
    sessionName: 'Visual Studio Code',
    type: 'other'
  },
  {
    imageName: 'minecraft',
    sessionName: 'Minecraft',
    type: 'game'
  },
  {
    imageName: 'spotify',
    sessionName: 'Spotify',
    type: 'music'
  }
]

ipcMain.on(LOAD_RUNNING_PROCESSES, async (event, args) => {
  const processes: TaskList[] = await tasklist()
  const uniqueProcesses = [...new Set(processes)]
  const detectedProcesses: BackgroundProcess[] | TaskList[] = processesWhiteList.filter(pw =>
    uniqueProcesses.some(p => p.imageName.toLowerCase() === `${pw.imageName.toLowerCase()}.exe`)
  )

  win.webContents.send(LOAD_RUNNING_PROCESSES, detectedProcesses)
})
