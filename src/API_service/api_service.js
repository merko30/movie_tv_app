
const API_KEY = "8da26207e00524e6d5c3ac910d4781a2";

class APIService {

    static getTopRatedMovies = () => {
        return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static getTopRatedTVShows = () => {
        return fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static getSingleMovie = (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static getSingleTVShow = (id) => {
        return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static searchByText = (text) => {
        return fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${text}&language=en-US&page=1`)
            .then(res => res.json())
            .catch(err => console.log(err))
    }



}

export default APIService;