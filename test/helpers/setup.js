require('babel-register');
require('babel-polyfill');


//JS DOM is lightweight implementation dom, so you can use
//a fake dom(Doesn't use a real browser)
//Phantom is crazy low since it runs the tests
//in a browser

//global is the "window" object of node environment
//all this is in the name of creating a browser like environment
//so that React can think it is in the browser

global.document = require('jsdom')
                          .jsdom('<body><div id="app"></div></body>');
global.window = document.defaultView;
global.navigator = window.navigator;



