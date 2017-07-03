const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./ClientApp')

/**
 * const {match} = require('react-router')
 * match({history: App.History, routes: App.Routes}
 *
 *
 * ....
 *
 *
 * These methods are no longer supported
 *
 */


ReactDOM.render(<App/>, document.getElementById('app'))
