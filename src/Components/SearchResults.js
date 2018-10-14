import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Grid, Loading } from '../Components';

class SearchResults extends Component {


    render() {
        const { data } = this.props;
        return (
            <div>
                {data ? <Grid list={data} active="search" /> : <Loading />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.searchResults
    }
}

export default connect(mapStateToProps, null)(SearchResults);