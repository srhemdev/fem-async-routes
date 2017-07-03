# A Complete Intro to React

Welcome to a complete intro to React! The site actual workshop material for this repo can be found [here][gh-page]. On the master branch you will find the completed project. On the start branch you will find the barebones boilerplater of the project designed to help you get started.

## Contributing

Please contribute, file issues, and make PRs. More than anything I'm sure there are typos abounding.

## License

MIT

[gh-page]: http://btholt.github.io/complete-intro-to-react/


Build Packages using npm run build as specified in the package.json
it runs webpack to create modules for you.

Run
-npm install mocha
-npm install chai
-npm install babel-polyfill

to run the tests

Use NYC to do reporting for html, text

For code coverage reports
nyc --reporter=lcov --reporter=text --reporter=html
--require babel-register --extension .jsx npm test


Istanbul helps to find the code that is not being
covered by tests

Hot module replacement doesn't work with stateless
components


Universal Rendering ( also known as server side rendering, isomorphic
 rendering)

 nodemon app.js restarts your server automatically

Please run this for requesting routes npm install --save node-ensure
Make change in ClientApp.js
