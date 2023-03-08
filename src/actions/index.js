//action types
export const ADD_MOVIES='ADD_MOVIES';

//action create(i.2 er are creating the action function to call whenever the components want)
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
      }
}