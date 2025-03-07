import { app, BrowserWindow } from 'electron'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // This should be true for loading Vite content properly
    },
  })

  win.loadURL('http://localhost:5173/')
}

app.whenReady().then(() => {
  createWindow()
}).catch((err) => {
  console.error(err)
})