const menubar = require('menubar');
const path = require('path');

menubar({
  icon: path.join(__dirname, '/icons/Icon@2x.png'),
  preloadWindow: true,
  transparent: true,
  height: 525,
  width: 340,
  index: `file://${__dirname}/app.html`,
  y: 30,
});
