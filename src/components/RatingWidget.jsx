import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css'; // Make sure your CSS file is imported

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHoveredRating(0);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 1000); // brief animation feedback
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => {
          const isActive = (hoveredRating || rating) >= star;
          return (
            <span
              key={star}
              className={`star ${isActive ? 'active' : ''} ${submitted ? 'bounce' : ''}`}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          );
        })}
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit Rating
      </button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
