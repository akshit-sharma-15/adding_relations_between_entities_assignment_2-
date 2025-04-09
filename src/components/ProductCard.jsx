// import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';

const ProductCard = ({ product, onRatingSubmit }) => {
  const { id, name, description, image, avgRating } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-desc">{description}</p>
      <p className="product-rating">Average Rating: {avgRating.toFixed(1)}</p>
      <RatingWidget productId={id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;
