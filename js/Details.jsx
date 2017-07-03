const React = require('react')
const {object} = React.PropTypes
const Header = require('./Header')
const {connector} = require('./Store')
const axios = require('axios')//lib that uses promises


// class Details extends React.Component {
//   render() {
//       return  (
//         <div className='container'>
//           <pre>
//             <code>
//               {JSON.stringify(this.props, null, 4)}
//             </code>
//           </pre>
//         </div>
//       );
//   }
// }


//awesome way to debug state and get ids in our case from url
// const Details = (props) => (
//   <div className='container'>
//           <pre>
//             <code>
//               {JSON.stringify(props, null, 4)}
//             </code>
//           </pre>
//   </div>
// )

//Data Tunneling
// const Details = (props) => (
//   <div className='container'>
//       <pre>
//         <code>
//           {JSON.stringify(props, null, 4)}
//         </code>
//       </pre>
//   </div>
// )

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      omdbState: {

      }
    }
  }
  //lifecycle method of React
  //componentDidMount runs ion browser n node, gets
  //called before it gets in dom

  //check if component got mounted(injected in dom)
  //make ajax calls here

  //component will unmount runs on dom exit
  //add event listeners, unsubscribe kind of methods
  //to prevent memory leak
  componentDidMount() {
    console.log(this.assignShow(this.props.match.params.id),"video details")

    //no api key hence api wont work, its ok !!!!
    axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.match.params.id).imdbID}`)
      .then((response) => {
        this.setState({omdbData: response.data})
      },(error) => {
        console.error('axios error', error)
      })
  }

  assignShow(id) {
    const showArray = this.props.shows.filter((show) => show.imdbID === id)
    return showArray[0]
  }
  render() {
    // const params = this.props.show || {}
    // const {title, description, year, poster, trailer} = params
    //redux gets this
    //const {title, description, year, poster, trailer} = this.props.shows[this.props.params.id]
    console.log(this.props, this.state)
    const {title, description, year, poster, trailer} = this.assignShow(this.props.match.params.id)

    let rating
    if(this.state.omdbData && this.state.omdbData.imdbRating) {
      rating = <h3 className='video-rating'>{this.state.omdbData.imdbRating}</h3>
    }

    return (<div className='container'>
      <Header/>
      <div className='video-info'>
        <h1 className='video-title'>{title}</h1>
        <h2 className='video-title'>({year})</h2>
        {rating}
        <img className='video-poster' src={`public/img/posters/${poster}`}/>
        <p className='video-description'>{description}</p>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
                  frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    </div>)
  }
}

Details.PropTypes =  {
  route: object
}

// const Details = React.createClass ({

//   componentDidMount() {
//     axios.get(`http://www.omdbapi.com/?i${this.props.shows[this.props.match.params.id].imdbID}`)
//       .then((response) => {
//         this.setState({omdbData: response.data})
//       },(error) => {
//         console.error('axios error', error)
//       })
//   },
//   propTypes: {
//     route: object
//   },
//   assignShow(id) {
//     const showArray = this.props.shows.filter((show) => show.imdbID === id)
//     return showArray[0]
//   },
//   render() {
//     // const params = this.props.show || {}
//     // const {title, description, year, poster, trailer} = params
//     //redux gets this
//     //const {title, description, year, poster, trailer} = this.props.shows[this.props.params.id]
//     console.log(this.props)
//     const {title, description, year, poster, trailer} = this.assignShow(this.props.match.params.id)
//
//     let rating
//     if(this.state.omdbData.imdbRating) {
//       rating = <h3 className='video-rating'>{this.state.omdbData.imdbRating}</h3>
//     }
//
//     return (<div className='container'>
//       <Header/>
//       <div className='video-info'>
//         <h1 className='video-title'>{title}</h1>
//         <h2 className='video-title'>({year})</h2>
//         {rating}
//         <img className='video-poster' src={`public/img/posters/${poster}`}/>
//         <p className='video-description'>{description}</p>
//         <div className='video-container'>
//           <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
//                   frameBorder='0' allowFullScreen></iframe>
//         </div>
//       </div>
//     </div>)
//   }
// })

module.exports = connector(Details);
