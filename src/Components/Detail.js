import React, { Component } from 'react';

import { connect } from 'react-redux';

import Loading from './Loading';

import { getSingleItem } from '../store/actions';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount = () => {
        const { match: { params: { id } } } = this.props;
        let active = this.props.location.pathname.split('/')[1]
        if (active === 'search') {
            this.props.getSingleItem(id, active, this.props.location.state.mediaType);
        } else {
            this.props.getSingleItem(id, active, 'not-important');
        }
    }

    displayInfo = (item, info) => {
        return <div className="detail-flex">
            {info === 'created_by' ?
                <p><b>Created by: </b></p> :
                <p><b>{item[info].length > 1 ? 'Genres: ' : 'Genre: '}</b></p>}

            {item[info] && item[info].map((c, i) => {
                return <p className="detail-flex-item" key={i}>{c.name}</p>
            })}
        </div>
    }

    render() {
        const { loading, item } = this.props;
        return (<div>
            {loading && <Loading />}
            {item && <div><div className="full" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
            }}>
            </div>
                <div className="detail-info">

                    <img className="detail-image" src={item.poster_path == null ? '/images/no-image-available.jpg' : `https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />

                    <div className="detail-about">

                        {(item.title || item.name) && <h3>{item.title ? item.title : item.name}</h3>}

                        {item.vote_average && <p>{item.vote_average} <i className="fa fa-star"></i></p>}

                        {item.created_by && this.displayInfo(item, 'created_by')}

                        {item.genres && this.displayInfo(item, 'genres')}

                        <b className="detail-overview">{item.overview}</b>

                    </div>
                </div>
            </div>}

        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.single_active,
        active: state.active,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getSingleItem })(Detail);