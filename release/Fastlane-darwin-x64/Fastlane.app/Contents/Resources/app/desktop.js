const menubar = require('menubar');
const path = require('path');

// enable ES6 (transpiling behind the scene)
require('babel-register');

// start frontend server
require('./src/server.js');

// start api server
require('./api/api.js');

menubar({
  icon: path.join(__dirname, '/desktop/icons/UberLogo.png'),
  // transparent: true,
  movable: false,
  resizable: false,
  useContentSize: true,
  height: 525,
  width: 340,
  index: `file://${__dirname}/desktop/app.html`,
  y: 30,
});
