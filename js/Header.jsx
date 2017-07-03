const React = require('react')
const {Link} = require('react-router-dom')
const {func, bool, string} = React.PropTypes
const {connector} = require('./Store')

const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    //handleSearchTermChange: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent(event) {
    //this.props.handleSearchTermChange(event.target.value)
    this.props.setSearchTerm(event.target.value)
  },
  render(){
    let utilSpace;
    console.log(this.props)
    if (this.props.showSearch) {
      utilSpace = <input type='text' className='search-input' placeholder='Search'
                         value={this.props.searchTerm} onChange={this.handleSearchTermEvent}/>
    }
    //https://reacttraining.com/react-router/web/api/Link/replace-bool
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            svideo
          </Link>
        </h1>
        <h2 className='header-back'>
          <Link to='/search' replace>Back</Link>
        </h2>
        {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header);
