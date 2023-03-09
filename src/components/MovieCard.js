import React from "react";
import { addFavourites ,addUnFavourites} from "../actions";

class MovieCard extends React.Component{

    handleFavouriteClick=()=>{
        const{movie}=this.props;
        this.props.dispatch(addFavourites(movie))
    }

    handleUnFavouriteClick=()=>{
        const {movie}=this.props;
        console.log( this.props.dispatch(addUnFavourites(movie)));
    }




    render(){

        const {movie,isMoviesFavourite}=this.props;

        return(

            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-poster" />
                </div>

                <div className="right">
                    <div className="title">{movie.title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">
                            {movie.imdbRating}
                        </div>

                        {isMoviesFavourite 
                        ?   <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>
                                Unfavourite
                            </button> 
                        :   <button className="favourite-btn" onClick={this.handleFavouriteClick}>
                                favourite
                            </button>    
                        
                        
                        }

                        
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;
