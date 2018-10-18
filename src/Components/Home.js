import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Grid, Loading } from '../Components';

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
        const { data, active } = this.props;
        return (
            <div style={{ marginTop: "1em", height: "100%" }}  >
                {data ? <Grid list={data} active={active} />
                    : <Loading />}
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