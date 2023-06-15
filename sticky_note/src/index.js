const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const Store = require('electron-store');
const store = new Store();
var stayOnTop = false;



// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  if (store.get('height') != undefined && store.get('width') != undefined){
      height = store.get('height');
      width = store.get('width');
  }
  else{
    width = 300;
    height = 400;
  }
  const mainWindow = new BrowserWindow({
    frame:false,
    width: width,
    height: height,
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.openDevTools();
  if(store.get('stay-on-top') != undefined){
    mainWindow.setAlwaysOnTop(store.get('stay-on-top'), 'screen');
  }
  console.log(app.getPath('userData'))
  mainWindow.on("resized", () => {
    size = mainWindow.getSize();
    store.set('width', size[0]);
    store.set('height', size[1]);
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
ipcMain.on('stay-on-top', () => {
  app.relaunch()
  app.exit()
});
ipcMain.on('quit-app', () => {
  app.quit();
});