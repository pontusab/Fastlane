/* eslint strict: 0 */
'use strict';

var menubar = require('menubar');


var mb = menubar({
  height: 495,
  width: 340,
  index: `file://${__dirname}/app.html`,
  y: 50,

});



mb.on('ready', function ready () {
  console.log('app is ready')
});
