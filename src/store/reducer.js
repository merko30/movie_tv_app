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
    tv: [],
    search: [],
    loading: false,
    error: null,
    single: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
        case FETCH_TVSHOWS:
        case SEARCH_ALL:
        case GET_SINGLE:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        case FETCH_TVSHOWS_SUCCESS:
            return {
                ...state,
                loading: false,
                tv: action.payload,
            }
        case FETCH_TVSHOWS_FAIL:
        case SEARCH_ALL_FAIL:
        case GET_SINGLE_FAIL:
        case FETCH_MOVIES_FAIL:
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        case SEARCH_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                search: action.payload
            }
        case GET_SINGLE_SUCCESS:
            return {
                ...state,
                loading: false,
                single: action.payload
            }
        default:
            return state;
    }
}

export default reducer;