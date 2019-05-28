import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  content: {
    margin: '1rem'
  },
  genres: {
    fontSize: '1.7rem'
  },
  description: {
    marginTop: '2rem'
  },
  rating: {
    fontSize: '1.2rem'
  }
}

const MovieDetail = ( {title_long, large_cover_image, genres, runtime, description_full, rating, yt_trailer_code, link}) => (
  <div style={styles.content}>
    <div className="row no-gutters">
      <div className="col-md-4" >
        <img src={large_cover_image} className="card-img " alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body" style={styles.text}>
          <h1>{title_long}</h1>
          <h2 style={styles.genres}> {genres} </h2>
          <h3 style ={styles.rating}> Rating: {rating} <i className="fas fa-star"></i> - {runtime} minutes </h3>
          <p className="card-text" style={styles.description}>
            {description_full}
          </p>
          <a href={link} target="_blank">Click here to watch the trailer</a>
        </div>
        <Link to={'/'}>
          <button type="button" class="btn btn-primary" style={styles.content}>Back</button>
        </Link>      
      </div>
    </div>
  </div>
)

export default MovieDetail