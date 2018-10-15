import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Search.css';

import { search, setActive } from '../../store/actions';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      timeout: 0
    };
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
          }, 1000)
        })
      } else {
        this.props.setActive('tv')
      }
    })
  }

  handleClass = (e) => {
    e.target.nextSibling.classList.toggle(styles['visible-input']);
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div className={styles['search-container']}>

        <i
          className="fa fa-search"
          style={{ color: "white", cursor: "pointer" }}
          onClick={this.handleClass}></i>

        <input className={styles["search-input"]} type="text" placeholder="Search..." onChange={this.handleChange} name="searchTerm" value={searchTerm} />

      </div>
    );
  }
}

export default connect(null, { search, setActive })(Search);