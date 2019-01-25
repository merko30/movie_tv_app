import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Detail.css';


import { getSingleItem } from '../../store/actions';

import { VideoPlayer, Loading, BackButton } from '../../Components';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount = () => {
        const { match: { params: { id } }, getSingleItem, location: { state: { from, mediaType } }, } = this.props;
        if (from === 'search') {
            getSingleItem(id, from, mediaType);
        } else {
            getSingleItem(id, from, 'not-important');
        }
    }

    displayInfo = (item, info) => {
        return <div className={styles["detail-flex"]}>
            {info === 'created_by' ?
                item[info].length > 0 ?
                    <p><b>Created by: </b></p> :
                    null :
                <p><b>{item[info] && item[info].length > 1 ? 'Genres: ' : 'Genre: '}</b></p>}

            {item[info] && item[info].map((c, i) => {
                return <p className={styles["detail-flex-item"]} key={i}>{c.name}</p>
            })}
        </div>
    }

    render() {
        const { item, loading, location: { state: { from, mediaType } } } = this.props;
        let isSearch = typeof mediaType !== 'undefined' || null;
        return (<div>
            {loading && <Loading />}
            {item && <div>

                <div
                    className={styles.full}
                    style={{
                        background: item.backdrop_path !== null &&
                            `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
                    }}>
                </div>

                <BackButton from={from} isSearch={isSearch} />

                <div className={styles["detail-info"]}>

                    {item.videos.results.length > 0 ?
                        item.videos.results[0].site === 'YouTube' && <VideoPlayer src={`https://www.youtube.com/watch?v=${item.videos.results[0].key}`} />
                        :
                        <img className={styles["detail-image"]} src={item.poster_path == null ? '/images/no-image-available.jpg' : `https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />}

                    <div className={styles["detail-about"]}>

                        {(item.title || item.name) && <h3>{item.title ? item.title : item.name}</h3>}

                        {(item.vote_average || item.vote_average !== 0) && <p>{item.vote_average} <i
                            className="fa fa-star"
                            style={{ color: "rgb(167, 111, 60)" }}></i></p>}

                        {item.created_by && this.displayInfo(item, 'created_by')}

                        {item.genres && this.displayInfo(item, 'genres')}

                        <b className={styles["detail-overview"]}>{item.overview}</b>

                    </div>
                </div>
            </div>}

        </div>
        );
    }
}

const mapStateToProps = ({ single, loading }) => ({ item: single, loading })

export default connect(mapStateToProps, { getSingleItem })(Detail);