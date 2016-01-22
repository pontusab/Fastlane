/* We need servers to run the app. */
require('../index');

const electron = require('electron');
const menubar = require('menubar');
const path = require('path');
const Tray = electron.Tray;

console.log(Tray);

menubar({
  icon: path.join(__dirname, 'Icon@2x.png'),
  // preloadWindow: true,
  transparent: true,
  height: 525,
  width: 340,
  index: `file://${__dirname}/app.html`,
  y: 30,
});
