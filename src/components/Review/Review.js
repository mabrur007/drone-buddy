import React from 'react';

const Review = ({ review }) => {
    const { name, id } = review;
    return (
        <div>
            <h4>Name:{name}</h4>
            <p>id: { id}</p>
        </div>
    );
};

export default Review;