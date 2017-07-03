const React = require('react');
const {element} = React.PropTypes;

//common layout component
const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

// Layout.propTypes = {
//   children: element.isRequired
// }

module.exports = Layout;
