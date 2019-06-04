import { types } from "../actions/"

const initialState = {
    movies: [],
    editIndex: null,
}

export default (state = initialState, action) => {
    let movies = [...state.movies];
    switch (action.type) {
        case types.ADD_MOVIE:
            return {
                ...state,
                movies: state.movies.concat(action.payload)
            }
        case types.DELETE_MOVIE:
            movies = [...state.movies];
            movies.splice(action.payload, 1);
            return {
                ...state,
                movies,
            }
        case types.EDIT_START:    
            return {
                ...state,
                editIndex: action.payload,
            }
        case types.EDIT_CONFIRM:
            movies = [...state.movies];
            movies[state.editIndex] = action.payload;
            return {
                movies,
                editIndex: null
            };

        default:
            return state
  }
}
