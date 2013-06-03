var start = Date.now();

var page = require('webpage').create();
var system = require('system');
var address = 'tiger.html';
var time = 0;

page.open(address, function (status) {
  page.render('tiger.png');
  time = Date.now() - start;
  console.log('Inner snippet took: ' + time);
  phantom.exit();
});