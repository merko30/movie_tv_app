import React, { Component } from 'react';

import { connect } from 'react-redux';

import Grid from './Grid';
import Loading from './Loading';

import { fetchTVShows } from '../store/actions';


class TVShows extends Component {

    componentDidMount() {
        this.props.fetchTVShows();
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                {data ? <Grid list={data} active="tv" /> : <Loading />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.TVShows
    }
}

export default connect(mapStateToProps, { fetchTVShows })(TVShows);