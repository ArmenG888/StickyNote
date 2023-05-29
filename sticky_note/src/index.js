const { app, BrowserWindow } = require('electron');
const path = require('path');
const Store = require('electron-store');
const store = new Store();




// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  store.set('theme', '1');
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    frame:false,
    width: 300,
    height: 400,
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
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