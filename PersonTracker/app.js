const {app, BrowserWindow} = require('electron')
const server = require('./main.js')


function newWindow() {
    window = new BrowserWindow({
        width: 800, 
        height:500
    })
    window.loadURL('http://localhost:1234/')
}




app.whenReady().then(function(){
    newWindow()
})