import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Detail.css';

import { Loading } from '../../Components';

import VideoPlayer from '../VideoPlayer/VideoPlayer';

import { getSingleItem } from '../../store/actions';


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
        const { item } = this.props;
        return (<div>

            {item ? <div><div className={styles.full}
                style={{
                    backgroundImage: item.backdrop_path == null ?
                        `url(/images/bg.jpg)` :
                        `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
                }}>
            </div>

                <Link to='/' className={styles.back}><i className="fa fa-arrow-left" style={{ color: "black" }}></i></Link>

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
            </div> : <Loading />}

        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.single_active
    }
}

export default connect(mapStateToProps, { getSingleItem })(Detail);