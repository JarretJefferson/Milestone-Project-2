import React, { useState,useEffect } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import './FoodPage.css';

const FoodPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    restaurant: '',
    rating: '',
    comment: '',
  }); 
  const [rating, setRating] = useState(0); // Add the rating state

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

  const changeRating = (newRating) => {
    setRating(newRating);
    setNewReview({ ...newReview, rating: newRating.toString() });
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
          Rating:
          <StarRatings
            rating={rating}
            starRatedColor="blue"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
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
            <StarRatings
              rating={parseFloat(review.rating)}
              starRatedColor="blue"
              numberOfStars={5}
              starDimension="50px"
              starSpacing="2px"
            />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;



