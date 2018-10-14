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
    GET_SINGLE_FAIL,
    SET_ACTIVE
} from './actionTypes';

const initialState = {
    movies: [],
    tv: [],
    searchResults: [],
    active: [],
    active_type: "tv",
    loading: false,
    error: null,
    single_active: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
                active_type: "movie"
            }
        case FETCH_MOVIES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_TVSHOWS:
            return {
                ...state,
                loading: true
            }
        case FETCH_TVSHOWS_SUCCESS:
            return {
                ...state,
                loading: false,
                tv: action.payload,
                active_type: "tv"
            }
        case FETCH_TVSHOWS_FAIL:
            return {
                ...state,
                loading: true
            }
        case SEARCH_ALL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case SEARCH_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                searchResults: action.payload,
                active_type: "search"
            }
        case SEARCH_ALL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_SINGLE:
            return {
                ...state,
                loading: true
            }
        case GET_SINGLE_SUCCESS:
            return {
                ...state,
                loading: false,
                single_active: action.payload
            }
        case GET_SINGLE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SET_ACTIVE: {
            return {
                ...state,
                active: [...state[action.payload]]
            }
        }
        default:
            return state;
    }
}

export default reducer;