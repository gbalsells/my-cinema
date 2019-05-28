import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  content: {
    width: '20rem',
    margin: '2rem 0 1rem 2rem',
    padding: '1rem 1rem 0 1rem'
  }
};
const Card = ({ title, medium_cover_image, genres, year, id }) =>(
  <div className="card shadow p-3 mb-5 bg-white rounded" style={styles.content}>
  <img src={medium_cover_image} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"> {genres.map(genre => { return <a>{genre}, </a> })}{year}</p>
    <Link to={`/movies/${id}`} >
    <button type="button" className="btn btn-primary">See more</button>
    </Link>
  </div>

</div>
)

export default Card;