const menubar = require('menubar');
const path = require('path');

// enable ES6 (transpiling behind the scene)
require('babel-register');

// start frontend server
require('./src/server.js');

menubar({
  'show-dock-icon': true,
  icon: path.join(__dirname, '/public/icons/UberLogo.png'),
  transparent: true,
  movable: false,
  resizable: false,
  useContentSize: true,
  height: 525,
  width: 340,
  index: `file://${__dirname}/app.html`,
  y: 30,
});
