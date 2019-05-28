import React from 'react';
import service from '../../services/MyCinemaService'
import CardDetail from '../../components/CardDetail'

class MovieDetail extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      movie: {},
      error: null
    }
  }

  async componentDidMount(){
    const { match } = this.props;
    const { params } = match;
    const { idMovie } = params;
    try{
      if (idMovie > 0) {
        const movie = await service.getMovieById(idMovie)
        movie.link = `https://www.youtube.com/watch?v=${movie.yt_trailer_code}`
        const genres = movie.genres.map( (genre, i) => {
          if (movie.genres.length === i + 1) {
            return `${genre}`
          }
          return `${genre}, `
        })
        movie.genres = genres
        this.setState({
          movie
        })
      } else {
        this.setState({
          error: true
        })
      }
    } catch (error) {
      this.setState({
        error
      })
    }
   
  }

  render(){
    const { movie, error } = this.state;
    return(
      <div className="detail">
        {
          error ? <h1>Error 404 - Movie Not Found</h1>
          : <CardDetail {...movie}/>

        }
      </div>
    );
  }
}

export default MovieDetail;