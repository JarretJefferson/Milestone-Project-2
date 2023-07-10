// NightlifePage.js
import React, { useState } from 'react';
import axios from 'axios';

const NightlifePage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    venue: '',
    rating: '',
    comment: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/nightlife/reviews', newReview);
      fetchReviews();
      setNewReview({
        venue: '',
        rating: '',
        comment: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/nightlife/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Nightlife Reviews</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Venue:
          <input
            type="text"
            value={newReview.venue}
            onChange={(e) =>
              setNewReview({ ...newReview, venue: e.target.value })
            }
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
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
      <div>
        <h2>Reviews:</h2>
        {reviews.map((review) => (
          <div key={review._id}>
            <h3>{review.venue}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NightlifePage;
