const menubar = require('menubar');
const path = require('path');

// enable ES6 (transpiling behind the scene)
require('babel-register');

// start frontend server
require('../src/server.js');

// start api server
require('../api/api.js');

menubar({
  icon: path.join(__dirname, '/icons/UberLogo.png'),
  // preloadWindow: true,
  transparent: true,
  height: 525,
  width: 340,
  index: `file://${__dirname}/app.html`,
  y: 30,
});
