import React from "react";
import Navbar from "./Navbar";
import {data} from '../data';
import MovieCard from './MovieCard';
import { addMovies ,setShowFavourite } from "../actions";


class App extends React.Component{

  componentDidMount(){
    const {store}=this.props;

    store.subscribe(()=>{
      this.forceUpdate();//this will re-render the whole app again
    })

    //make api call and dispatch(action)
    store.dispatch(addMovies(data));
  }

  isMoviesFavourite=(movie)=>{
    const {movies}=this.props.store.getState();

    const index=movies.favourites.indexOf(movie);

    if(index!== -1){
      //found the movie
      return true;
    }
    return false;
  }

  onChangetab=(val)=>{
    this.props.store.dispatch(setShowFavourite(val));
  }

  render(){
      const {movies}=this.props.store.getState();//{movies:{},favourite:[]}
      const {list,favourites,showFavourites}=movies
      console.log(this.props.store.getState());
      const displyList=showFavourites ? favourites : list;
      return (
        <div className="App">
          <Navbar />

          <div className="main">
            <div className="tabs">
              <div className= {`tab - ${showFavourites  ? '': 'active-tabs'}` } onClick={()=>this.onChangetab(false)}>Movies</div>
              <div className= {`tab - ${showFavourites ? 'active-tabs ': '' }` } onClick={()=>this.onChangetab(true)}>Favourites</div>
            </div>


            <div className="list">
                {displyList.map((movie,index)=>(
                    <MovieCard 
                        movie={movie} 
                        key={`movie-${index}`} 
                        isMoviesFavourite={this.isMoviesFavourite(movie)}
                        dispatch={this.props.store.dispatch}/>
                ))}
            </div>

          </div>

        </div>
      );

  }
  
}

export default App;
