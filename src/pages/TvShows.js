import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchTVShows } from '../store/actions';
import { Loading, Grid, Error } from '../Components';

class TvShows extends Component {

    componentDidMount() {
        this.props.fetchTVShows();
    }

    render() {
        const { error, tv, loading } = this.props;
        return <div>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {tv && <Grid list={tv} />}
        </div>
    }
}

const mapStateToProps = ({ tv, loading, error }) => ({ tv, loading, error });

export default connect(mapStateToProps, { fetchTVShows })(TvShows);