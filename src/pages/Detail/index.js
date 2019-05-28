import React from 'react';
import Nav from '../../components/Nav';
import MovieDetail from '../../containers/MovieDetails';

const Detail = (props) => {
  return(
    <div className="detail">
      <Nav />
      <MovieDetail {...props}/>
    </div>
  )
}

export default Detail;