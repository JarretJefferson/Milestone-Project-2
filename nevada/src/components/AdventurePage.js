import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import './AdventurePage.css';

const AdventurePage = () => {
  const [adventureReviews, setAdventureReviews] = useState([]);
  const [newAdventureReview, setNewAdventureReview] = useState({
    location: '',
    rating: '',
    comment: '',
  });
  const [rating, setRating] = useState(0); // Add the rating state

  useEffect(() => {
    fetchAdventureReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/adventureReviews/submit', newAdventureReview);
      fetchAdventureReviews();
      setNewAdventureReview({
        location: '',
        rating: '',
        comment: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchAdventureReviews = async () => {
    try {
      const response = await axios.get('/api/adventureReviews');
      setAdventureReviews(response.data.reviews);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const changeRating = (newRating) => {
    setRating(newRating);
    setNewAdventureReview({ ...newAdventureReview, rating: newRating.toString() });
  };

  return (
    <div className="adventure-page">
      <h1>Adventure Reviews</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            value={newAdventureReview.location}
            onChange={(e) =>
              setNewAdventureReview({ ...newAdventureReview, location: e.target.value })
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
            value={newAdventureReview.comment}
            onChange={(e) =>
              setNewAdventureReview({ ...newAdventureReview, comment: e.target.value })
            }
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="reviews-container">
        <h2>Reviews:</h2>
        {adventureReviews.map((adventureReview) => (
          <div key={adventureReview._id} className="review">
            <h3>{adventureReview.location}</h3>
            <StarRatings
              rating={parseFloat(adventureReview.rating)}
              starRatedColor="blue"
              numberOfStars={5}
              starDimension="50px"
              starSpacing="2px"
            />
            <p>{adventureReview.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdventurePage;

