import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Grid, Loading, Header } from '../Components';

import { fetchTVShows, fetchMovies, setActive } from '../store/actions';

class Movies extends Component {

    componentWillMount() {
        this.props.fetchTVShows();
        this.props.fetchMovies();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.shows !== this.props.shows) {
            this.props.setActive('tv');
        } else if (prevProps.search !== this.props.search) {
            this.props.setActive('searchResults');
        }
    }



    render() {
        const { data, active } = this.props;
        return (
            <div>
                <Header search={false} />
                {data ? <Grid list={data} active={active} /> : <Loading />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.active,
        shows: state.tv,
        search: state.searchResults,
        active: state.active_type
    }
}

export default connect(mapStateToProps, { fetchTVShows, fetchMovies, setActive })(Movies);