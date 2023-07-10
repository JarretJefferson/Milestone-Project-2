import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './FoodPage.css';

const FoodPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    restaurant: '',
    rating: '',
    comment: '',
  });
  useEffect(()=>{ fetchReviews()},[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/reviews/submit', newReview);
      fetchReviews();
      setNewReview({
        restaurant: '',
        rating: '',
        comment: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/reviews');
      setReviews(response.data.reviews);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="food-page">
      <h1>Food Reviews</h1>
      <form onSubmit={handleSubmit} className="food-form">
        <label>
          Restaurant:
          <input
            type="text"
            value={newReview.restaurant}
            onChange={(e) =>
              setNewReview({ ...newReview, restaurant: e.target.value })
            }
          />
        </label>
        <label>
          Rating (1-5):
          <input
            type="number"
            min="1"
            max="5"
            value={newReview.rating}
            onChange={(e) =>
              setNewReview({ ...newReview, rating: e.target.value })
            }
          />
        </label>
        <label>
          Comment:
          <textarea
            value={newReview.comment}
            onChange={(e) =>
              setNewReview({ ...newReview, comment: e.target.value })
            }
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="reviews-container">
        <h2>Reviews:</h2>
        {reviews.map((review) => (
          <div key={review._id} className="review">
            <h3>{review.restaurant}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;



