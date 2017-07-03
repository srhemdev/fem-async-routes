/**
 * Created by hemdev on 6/27/17.
 */
/**
 * Created by hemdev on 6/25/17.
 */
//we can remove this now. global React React.DOM
const React = require('react');
const { Link } = require('react-router-dom')
//const MyTitle = require('./MyTitle');

//const ce = React.createElement;


//const TitleFactory = React.createFactory(MyTitle);
/*
 var MyFirstComponent = function () {
 return (
 React.createElement('div', null,
 // React.createElement(MyTitle, null), //instance of the class
 // React.createElement(MyTitle, null),
 // React.createElement(MyTitle, null)
 //Alternate way to call MyTitle rather than using React.createElement each time
 TitleFactory(null),
 ce(MyTitle, null),
 React.createElement(MyTitle, null)
 )
 );
 };
 */


//Using props
// var MyFirstComponent = function () {
//   return (
//     React.createElement('div', null,
//       TitleFactory({title: 'Props are great!!', color: 'blue'}),
//       ce(MyTitle, {title: 'Use Props everywhere', color: 'red'}),
//       React.createElement(MyTitle, {title: 'Props are the best', color: 'green'})
//     )
//   );
// };


// var MyFirstComponent = ()  => {
//   return (
//     <div>
//       <MyTitle title='Whatevs' color='rebeccapurple'/>
//       <MyTitle title='LOL' color="papayawhip"/>
//       <MyTitle title='OMGLOWTFBBQ' color="#f06d06"/>
//     </div>
//   );
// }


//using es6 return expression, you need to have one root component
// const MyFirstComponent = ()  => (
//     <div>
//       <MyTitle title='Whatevs' color='rebeccapurple'/>
//       <MyTitle title='LOL' color="papayawhip"/>
//       <MyTitle title='OMGLOWTFBBQ' color="#f06d06"/>
//     </div>
// )

const Landing = ()  => (
  <div className='landing'>
    <h1>svideo</h1>
    <input className='search' type ='text' placeholder='Search'/>
    <Link to='/search'>
      Rendering with React
    </Link>
  </div>
)

module.exports = Landing;
