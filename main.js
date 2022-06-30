const { app, BrowserWindow } = require("electron");
const path = require("path");

/*try {
    require('electron-reloader')(module)
  } catch (_) {}*/

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 700,
        height: 1000,
        resizable: false,
        //autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile(path.join(__dirname, "index.html"));
}

app.on("ready", loadMainWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});