import React from 'react';
import service from '../../services/MyCinemaService'
import Card from '../../components/Card'
import styles from './styles.css'

class MovieList extends React.Component{
  constructor() {
    super();

    this.state = {
      list: []
    }
  }

  async componentDidMount(){
    const list = await service.getMovies();
    console.log(list)
    
    this.setState({
      list
    })
  }

  render(){
    const { list } = this.state
    return(
      <div className="list">
        <div className="movies">
        {
          list.map( (item, index) => <Card key={item.id} {...item}/>)
        }
        </div>
      </div>
    )
  }
}

export default MovieList