const { app, BrowserWindow, Menu, dialog } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.maximize();
  win.show();
  win.loadFile("index.html");
  const menuTemplate = [
    {
      label: "Archivo",
      submenu: [
        {
          label: "Salir",
          accelerator: process.platform === "darwin" ? "Cmd+W" : "Ctrl+W",
          click: () => app.quit()
        }
      ]
    },
    {
      label: "Ayuda",
      submenu: [
        {
          label: "Acerca de",
          click: () => {
            dialog.showMessageBox(win, {
              type: "info",
              title: "Acerca de Quatre-Tool",
              message: "Quatre-Tool v0.1\nHerramienta de estudio desarrollada en Electron.",
              buttons: ["Cerrar"]
            });
          }
        }
      ]
    }
  ];
  const customMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(customMenu);
}


app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
