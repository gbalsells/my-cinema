import React from 'react';
import service from '../../services/MyCinemaService'
import Card from '../../components/Card'
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
        <div className="row">
        {
          list.map( (item, index) => <Card key={item.id} {...item}/>)
        }
        </div>
      </div>
    )
  }
}

export default MovieList