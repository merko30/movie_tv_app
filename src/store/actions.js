import {
    FETCH_MOVIES,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAIL,
    FETCH_TVSHOWS,
    FETCH_TVSHOWS_FAIL,
    FETCH_TVSHOWS_SUCCESS,
    SEARCH_ALL,
    SEARCH_ALL_SUCCESS,
    SEARCH_ALL_FAIL,
    GET_SINGLE,
    GET_SINGLE_SUCCESS,
    GET_SINGLE_FAIL
} from "./actionTypes";


import APIService from '../API_service/api_service';

export const fetchMovies = () => dispatch => {
    dispatch({ type: FETCH_MOVIES });
    APIService.getTopRatedMovies().then((data) =>
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data.results })
    ).catch(error => {
        dispatch({ type: FETCH_MOVIES_FAIL, payload: error.message })
    })

}

export const fetchTVShows = () => dispatch => {
    dispatch({ type: FETCH_TVSHOWS });
    APIService.getTopRatedTVShows().then((data) =>
        dispatch({ type: FETCH_TVSHOWS_SUCCESS, payload: data.results })
    ).catch(error => {
        dispatch({ type: FETCH_TVSHOWS_FAIL, payload: error.message })
    })

}

export const search = (term) => dispatch => {
    dispatch({ type: SEARCH_ALL });
    APIService.searchByText(term).then((data) =>
        dispatch({ type: SEARCH_ALL_SUCCESS, payload: data.results })
    ).catch(error => {
        dispatch({ type: SEARCH_ALL_FAIL, payload: error.message })
    })

}

export const getSingleItem = (id, active, mediaType) => (dispatch) => {
    dispatch({ type: GET_SINGLE });
    if (active === "movie") {
        APIService.getSingleMovie(id).then((data) => {
            dispatch({ type: GET_SINGLE_SUCCESS, payload: data })
        }).catch(error => {
            dispatch({ type: GET_SINGLE_FAIL, payload: error.status_message })
        })
    } else if (active === 'tv') {
        APIService.getSingleTVShow(id).then((data) => {
            dispatch({ type: GET_SINGLE_SUCCESS, payload: data })
        }).catch(error => {
            dispatch({ type: GET_SINGLE_FAIL, payload: error.status_message })
        })
    } else if (active === "search") {
        if (mediaType === 'movie') {
            APIService.getSingleMovie(id).then((data) => {
                dispatch({ type: GET_SINGLE_SUCCESS, payload: data })
            }).catch(error => {
                dispatch({ type: GET_SINGLE_FAIL, payload: error.status_message })
            })
        } else if (mediaType === 'tv') {
            APIService.getSingleTVShow(id).then((data) => {
                dispatch({ type: GET_SINGLE_SUCCESS, payload: data })
            }).catch(error => {
                dispatch({ type: GET_SINGLE_FAIL, payload: error.status_message })
            })
        }
    }

}

