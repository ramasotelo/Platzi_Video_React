import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions'
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import checkIcon from '../assets/static/check-icon.png';

const CarouselItem = (props) => {
    const { id ,title, year, contentRating, duration, cover, isList} = props;
    const handleSetFavorite = ()=>{
        props.setFavorite({
            id ,title, year, contentRating, duration, cover
        });
        document.getElementById(id).src = checkIcon;
    }
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
        document.getElementById(id).src = iconPlus;
    }
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}/>
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play"/> 
                    {isList ?
                        <img
                            id={id}
                            className="carousel-item__details--img" 
                            src={removeIcon} 
                            alt="Remove" 
                            onClick= {()=> handleDeleteFavorite(id)}
                        />:
                        <img 
                            id={id}
                            className="carousel-item__details--img" 
                            src={plusIcon} 
                            alt="Plus" 
                            onClick= {handleSetFavorite}
                        />
                    }   
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
    deleteFavorite,
};

export default connect(null,mapDispatchToProps)(CarouselItem);