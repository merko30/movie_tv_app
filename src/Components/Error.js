import React, { Component } from 'react'

import { connect } from 'react-redux';

class Error extends Component {

    render() {
        const { error } = this.props;
        return (
            <div>
                {error && <div className="error">
                    <h4>{error}</h4>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps, null)(Error);
