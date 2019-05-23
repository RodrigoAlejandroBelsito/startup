export const types = {
    ADD_MOVIE: 'ADD_MOVIE',
    DELETE_MOVIE: 'DELETE_MOVIE',
    EDIT_START: 'EDIT_START',
    EDIT_CONFIRM: 'EDIT_CONFIRM',
}

export const addMovie = (payload) => (
    (dispatch) => {
        dispatch({
            type: types.ADD_MOVIE,
            payload,
        })
    }
);

export const deleteMovie = (payload) => (
    (dispatch) => {
        dispatch({
            type: types.DELETE_MOVIE,
            payload,
        })
    }
);

export const editMovie = (payload) => (
    (dispatch) => {
        dispatch({
            type: types.EDIT_START,
            payload,
        })
    }
);

export const confirmEdit = (payload) => (
    (dispatch) => {
        dispatch({
            type: types.EDIT_CONFIRM,
            payload,
        })
    }
);
