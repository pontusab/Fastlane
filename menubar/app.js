/* eslint strict: 0 */
var menubar = require('menubar');

var mb = menubar({
  transparent: true,
  height: 525,
  width: 340,
  index: `file://${__dirname}/app.html`,
  y: 30,
});
