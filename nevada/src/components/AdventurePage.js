import React, { useState } from 'react';
import axios from 'axios';
import './AdventurePage.css';

const AdventurePage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    place: '',
    rating: 0,
    comment: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/adventure/reviews', newReview);
      fetchReviews();
      setNewReview({
        place: '',
        rating: 0,
        comment: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/adventure/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="adventure-page">
      <h1>Adventure Reviews</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Place:
          <input
            type="text"
            value={newReview.place}
            onChange={(e) =>
              setNewReview({ ...newReview, place: e.target.value })
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
              setNewReview({ ...newReview, rating: parseInt(e.target.value) })
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
            <h3>{review.place}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdventurePage;
