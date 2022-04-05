import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { img, name, says, ratings } = review;
    
    return (
        <div className='review'>
            <img src={img} alt="reviewer" />
            <h4>Name:{name}</h4>
            <p> {says}</p>
            <p>Ratings: <b>{ ratings}</b></p>
        </div>
    );
};

export default Review;