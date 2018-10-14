import React, { Component } from 'react';

import { connect } from 'react-redux';

import Grid from './Grid';

import Loading from './Loading';

import { fetchMovies } from '../store/actions';

class Movies extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                {data ? <Grid list={data} active="movies" /> : <Loading />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.movies
    }
}

export default connect(mapStateToProps, { fetchMovies })(Movies);