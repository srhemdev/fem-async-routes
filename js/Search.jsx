const React = require('react');
const {object, string, arrayOf} = React.PropTypes
const ShowCard = require('./ShowCard');
const data = require('../data.json'); //Data Tunneling
const Header = require('./Header')
const {connector} = require('./Store')

//JSON.stringify(obj, replacer fn, no of SPACES)
//key is used to provide unique id
// const Search = () => (
//   <div className='container'>
//     <header className="header">
//       <h1 className='brand'>svideo</h1>
//       <input className='search-input' type='text' placeholder='Search'/>
//     </header>
//     <div className='shows'>
//       {data.shows.map((s) =>(
//         //<ShowCard show={s} key={s.imdbID}/>
//         <ShowCard {...s} key={s.imdbID}/>
//       ))}
//     </div>
//   </div>
// )

/*<Header handleSearchTermChange={this.handleSearchTermChange}*/
/*searchTerm={this.state.searchTerm}*/
/*showSearch={true} />*/


const Search = React.createClass ({
  getInitialState (props) {
      return {
        searchTerm: ''
      }
  },
  statics: {
    myFilter: function() {

    }
  },
  propTypes: {
    shows: arrayOf(object),
    searchTerm:string
  },
  // handleSearchTermChange (searchTerm) {
  //     //Its a synthetic event not a DOM event
  //     this.setState({searchTerm: searchTerm})
  // },
  //Binding using on change
  render() {
      return (
        <div className='container'>

          <Header showSearch={true} />


          <div className='shows'>
            {this.props.shows
              .filter((show) => `${show.title} ${show.description}`
                                  .toUpperCase()
                                  .indexOf(this.props.searchTerm.toUpperCase()) >= 0)
              .map((s) => (
              //<ShowCard show={s} key={s.imdbID}/>
              <ShowCard {...s} key={s.imdbID}/>
            ))}
          </div>
        </div>
      )
  }
})

// class Search extends React.Component {
//   render() {
//     return (
//       <div className='container'>
//         <header className="header">
//           <h1 className='brand'>svideo</h1>
//           <input className='search-input' type='text' placeholder='Search'/>
//         </header>
//         <div className='shows'>
//           {data.shows.map((s) => (
//             //<ShowCard show={s} key={s.imdbID}/>
//             <ShowCard {...s} key={s.imdbID}/>
//           ))}
//         </div>
//       </div>
//     )
//   }
// }

module.exports = connector(Search);
