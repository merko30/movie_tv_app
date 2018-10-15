import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Grid, Loading, Header } from '../Components';

import { fetchTVShows, fetchMovies, setActive } from '../store/actions';

class Movies extends Component {

    componentWillMount() {
        if (this.props.active === 'search') {
            this.props.setActive('search');
        } else if (this.props.active === 'movies') {
            this.props.setActive('movies');
        }


        else {
            this.props.fetchTVShows();
            this.props.fetchMovies();
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.search !== this.props.search) {
            this.props.setActive('search');
        } else if (prevProps.shows !== this.props.shows) {
            this.props.setActive('tv');
        }

    }

    render() {
        const { data, active, loading } = this.props;
        return (
            <div>
                <Header search={false} />
                {data && <Grid list={data} active={active} />}
                {loading && <Loading />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.active,
        shows: state.tv,
        search: state.search,
        active: state.active_type,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { fetchTVShows, fetchMovies, setActive })(Movies);