/**
 * React Router has been updated.
 * Please check for updated version here:
 * https://github.com/ReactTraining/react-router/issues/4752
 */


// ReactDOM.render(
//   React.createElement(MyFirstComponent),
//   document.getElementById("app")
// );
const React = require('react');
//const ReactDOM = require('react-dom');
const Layout = require('./Layout');
const Landing = require('./Landing');
const Search = require('./Search');
const Details = require('./Details')
//const {shows} = require('../data.json');
const {store} = require('./Store');

const {Provider} = require('react-redux');
const {HashRouter, Route, IndexRoute, browserHistory} = require('react-router-dom');

if(typeof module !== undefined && module.require) {
  if(typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure') //shim for node.js
  }
}

//only way to do asynchronous routing is with config object
const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent(location, cb) {
      require.ensure([], (error)=>{
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent(location, cb) {
        require.ensure([], (error) => {
          cb(null, require('./Search'))
        })
      }
    },
    {
      path: 'details',
      getComponent(location, cb) {
        require.ensure([], (error) => {
          cb(null, require('./Details'))
        })
      }
    }
  ]
}

const myRoutes = ()  => (
    <div>
      <Route exact path='/' component={Landing}/>
      <Route path='/search' component={Search} /*shows={shows}*//>
      <Route path='/details/:id' component={Details}/>
    </div>
)

//BETTER
//const {Router, Route, hashHistory} = ReactRouter;
//OR
// const Router = ReactRouter.Router;
// const Route = ReactRouter.Route;
// const hashHistory = ReactRouter.hashHistory;

// const App = () => (
//   <HashRouter history={browserHistory}>
//     <div>
//       <Route exact path='/' component={Landing}/>
//       <Route path='/search' component={Search} shows={shows}/>
//       <Route path='/details/:id' component={Details}/>
//     </div>
//   </HashRouter>
// )



//https://stackoverflow.com/questions/42768620/onenter-not-called-in-react-router
const App = React.createClass ({
  // assignShow(nextState, replace) { //dont need this since on enter is not supported
  //     console.log('im here', nextState, replace)
  //     const showArray = shows.filter((show) => show.imdbID === nextState.params.id)
  //
  //   //cant find the id in route hence redirect to main page
  //     if(showArray.length < 1) {
  //       return replace('/')
  //     }
  //
  //     Object.assign(nextState.params, showArray[0])
  //     return nextState
  // },

  /*<Route path='/details/:id' render={(nextState) => {
   // const showArray = shows.filter((show) => show.imdbID === nextState.match.params.id)
   //
   // //cant find the id in route hence redirect to main page
   // if(showArray.length < 1) {
   //   return <Redirect to='/'/>
   //   //return replace('/')
   // } else {
   //Object.assign(nextState.match.params, showArray[0])
   //return <Details show={showArray[0]}/>
   return <Details/>
   //   //return nextState
   // }


   }}/>*/
  render () {
    return (
      <Provider store={store}>
        <HashRouter history={browserHistory} /*routes={rootRoute}*/>
          {myRoutes()}
        </HashRouter>
      </Provider>
    )
  }
})

//App.Routes = myRoutes

App.Routes = rootRoute

App.History = browserHistory

//Ideally preferred not working for now
// const App = () => (
//   <HashRouter history={browserHistory}>
//     <div>
//       <Route path='/' component={Layout}>
//         <IndexRoute component={Landing}/>
//         <Route path='/search' component={Search}/>
//       </Route>
//     </div>
//   </HashRouter>
// )

//Split out app and what renders the app
// so that app can be render on the server

//no longer our entry just a module
module.exports = App;
