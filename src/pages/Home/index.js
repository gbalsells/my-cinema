import React from 'react';
import MovieList from '../../containers/MovieList'
import Nav from '../../components/Nav';

const Home = () => {
  return(
    <div className="home">
      <Nav />
      <MovieList />
    </div>
  )
}

export default Home;