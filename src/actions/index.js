//action types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITES='ADD_FAVOURITES';
export const ADD_TO_UNFAVOURITES='ADD_TO_UNFAVOURITES';
export const SET_SHOW_FAVOURITE='SET_SHOW_FAVOURITE';
//action create(i.2 er are creating the action function to call whenever the components want)
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
      }
}

export function addFavourites(movie){
  return {
      type:ADD_FAVOURITES,
      movie
    }
}

export function addUnFavourites(movie){
  return {
      type:ADD_TO_UNFAVOURITES,
      movie
    }
}

export function setShowFavourite(val){
  return {
      type:SET_SHOW_FAVOURITE,
      val
    }
}