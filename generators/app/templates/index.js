var app = require('app');  
var BrowserWindow = require('browser-window');  
var mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.setMenuBarVisibility(false);
  mainWindow.setAutoHideMenuBar(true);

  // this prevents the closing of the window until cleanup() in 
  // the render process actually calls window.close.
  var cleaning_up = false;
  mainWindow.on("close", function(e) {
  	if ( cleaning_up == false ){ 
  		cleaning_up = true;
  		mainWindow.webContents.executeJavaScript("cleanup()");
  		e.preventDefault();
  	}
  });


  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});