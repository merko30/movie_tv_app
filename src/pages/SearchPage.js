import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Loading, Grid, Error, Search } from '../Components';

import { search } from '../store/actions';

class SearchPage extends Component {

    state = {
        searchTerm: "",
        timeout: 0
    }

    handleChange = (e) => {
        clearTimeout(this.state.timeout);
        this.setState({
            searchTerm: e.target.value
        }, () => {
            if (this.state.searchTerm.length > 2) {
                this.setState({
                    timeout: setTimeout(() => {
                        this.props.search(this.state.searchTerm)
                    }, 500)
                })
            }
        })
    }


    render() {
        const { error, searchResults, loading } = this.props;
        return <div>
            <Search
                handleChange={this.handleChange}
                searchTerm={this.state.searchTerm}
            />
            {error && <Error error={error} />}
            {loading && <Loading />}
            {searchResults && <Grid list={searchResults} />}
        </div>
    }
}

const mapStateToProps = ({ search, loading, error }) => ({ searchResults: search, loading, error });

export default connect(mapStateToProps, { search })(SearchPage);