/* global React React.DOM */

//First component
// var MyFirstComponent = function() {
//   return React.createElement('div', {style: {color: 'blue'}},//elementName, attrs
//     React.createElement('h1', null, "This is my first component!")
//   );
// };
//
// ReactDOM.render(
//   React.createElement(MyFirstComponent),
//   document.getElementById("app")
// );

//First component

//Alternate way to create nested component using React Class which actually
// creates a class and then you can have multiple instances of that class.

const React = require('react');//eliminate usage of globals like using React variabled directly

const ce = React.createElement;
const MyTitle = React.createClass({
  render () {
    //You can use the below code in plain js files:
    // return(
    //   ce('div', null,
    //     //React.createElement('h1', null, 'Check out this component!')
    //     ce('h1', {style:{color:this.props.color}}, this.props.title),
    //     ce('h2', null, 'hi')
    //   )
    // )

    //We are using jsx now so we will write it
    // differently and have Babel compile JSX
    //for us
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
});

// var MyTitle = function () {
//   return (
//     React.createElement('div', null,
//       React.createElement('h1', null, 'Check out this component!')
//     )
//   );
// };

module.exports = MyTitle;
