import React from "react";
import Navbar from "./Navbar";
import {data} from '../data';
import MovieCard from './MovieCard';
import { addMovies } from "../actions";
class App extends React.Component{

  componentDidMount(){
    const {store}=this.props;

    store.subscribe(()=>{
      console.log("Updated");
      this.forceUpdate();//this will re-render the whole app again
    })

    //make api call and dispatch(action)
    store.dispatch(addMovies(data));


  }



  render(){

      const {list}=this.props.store.getState();//{list:[],favourite:[]}
      console.log(this.props.store.getState());
      return (
        <div className="App">
          <Navbar />

          <div className="main">
            <div className="tabs">
              <div className="tab">Movies</div>
              <div className="tab">Favourites</div>
            </div>


            <div className="list">
                {list.map((movie,index)=>(
                    <MovieCard movie={movie} key={`movie-${index}`}/>
                ))}
            </div>

          </div>

        </div>
      );

  }
  
}

export default App;
