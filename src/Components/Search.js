import React, { Component } from 'react';

import { connect } from 'react-redux';

import history from '../history';
import { search } from '../store/actions';


let timeout = 0;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      loading: false

    };
  }

  search = () => {
    clearTimeout(timeout);
    const { searchTerm } = this.state;
    if (searchTerm.length > 2) {
      timeout = setTimeout(() => {
        history.push('/search');
        this.props.search(searchTerm);
      }, 3000);
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleClass = (e) => {
    e.target.nextSibling.classList.toggle('visible-input');
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="search-container">
        <i className="fa fa-search fa-2x" onClick={this.handleClass}></i>
        <input className="search-input" type="text" placeholder="Search..." onChange={this.handleChange} value={searchTerm} onKeyDown={() => { this.search() }} />
      </div>
    );
  }
}

export default connect(null, { search })(Search);