

import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchMovies } from '../store/actions';
import { Loading, Grid, Error } from '../Components';

class Movies extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        const { error, movies, loading } = this.props;
        return <div>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {movies && <Grid list={movies} />}
        </div>
    }
}

const mapStateToProps = ({ movies, loading, error }) => ({ movies, loading, error });

export default connect(mapStateToProps, { fetchMovies })(Movies);