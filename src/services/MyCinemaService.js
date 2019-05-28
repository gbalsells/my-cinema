class MyCinemaService{
  constructor(){
    this.axios = require('axios')
  }

  async getMovies(){
    const response = await this.axios.get('https://yts.am/api/v2/list_movies.json')
    const data = await response.data.data.movies
    return data
  }

  async getMovieById(id){
    const response = await this.axios.get(`https://yts.am/api/v2/movie_details.json?movie_id=${id}`)
    const data = await response.data.data.movie
    return data
  }

  async getCriticsById(id) {
    const response = await this.axios.get(`https://yts.am/api/v2/movie_reviews.json?movie_id=${id}`)
    const data = await response //.data.data.movie
    return data
  }
}

const _instance = new MyCinemaService()
export default _instance