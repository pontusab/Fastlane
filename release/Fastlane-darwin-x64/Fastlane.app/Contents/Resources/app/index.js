// enable ES6 (transpiling behind the scene)
require('babel-register');

// start frontend server
require('./src/server.js');

// start api server
require('./api/api.js');
