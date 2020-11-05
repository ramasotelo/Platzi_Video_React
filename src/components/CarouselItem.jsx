import React from 'react';
import { connect } from 'react-redux';
import { setFavorite } from '../actions'
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
    const { title, year, contentRating, duration, cover} = props;
    const handleSetFavorite = ()=>{
        props.setFavorite({
            title, year, contentRating, duration, cover
        })
    }
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}/>
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play"/>
                    <img 
                        className="carousel-item__details--img" 
                        src={plusIcon} 
                        alt="Plus" 
                        onClick= {handleSetFavorite}
                    />
                </div>     
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {year,contentRating,duration}
                </p>
            </div>
        </div>
    );
}

CarouselItem.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    cover: PropTypes.string
}
const mapDispatchToProps = {
    setFavorite,
};

export default connect(null,mapDispatchToProps)(CarouselItem);