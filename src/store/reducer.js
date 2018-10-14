import {
    FETCH_MOVIES,
    FETCH_MOVIES_FAIL,
    FETCH_MOVIES_SUCCESS,
    FETCH_TVSHOWS,
    FETCH_TVSHOWS_SUCCESS,
    FETCH_TVSHOWS_FAIL,
    SEARCH_ALL,
    SEARCH_ALL_SUCCESS,
    SEARCH_ALL_FAIL,
    GET_SINGLE,
    GET_SINGLE_SUCCESS,
    GET_SINGLE_FAIL
} from './actionTypes';

const initialState = {
    movies: [],
    TVShows: [],
    searchResults: [],
    loading: false,
    error: null,
    single_active: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
            }
        case FETCH_MOVIES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case FETCH_TVSHOWS:
            return {
                loading: true
            }
        case FETCH_TVSHOWS_SUCCESS:
            return {
                loading: false,
                TVShows: action.payload,
            }
        case FETCH_TVSHOWS_FAIL:
            return {
                loading: true
            }
        case SEARCH_ALL:
            return {
                loading: false,
                error: action.payload,
            }

        case SEARCH_ALL_SUCCESS:
            return {
                loading: false,
                searchResults: action.payload,
            }
        case SEARCH_ALL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case GET_SINGLE:
            return {
                loading: true
            }
        case GET_SINGLE_SUCCESS:
            return {
                loading: false,
                single_active: action.payload
            }
        case GET_SINGLE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;