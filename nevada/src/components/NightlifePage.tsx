import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import './Nightlife.css';

interface Review {
  _id?: string;
  location: string;
  rating: string;
  comment: string;
}

const NightlifePage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState<Review>({
    location: '',
    rating: '',
    comment: '',
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/Nightlife/submit', newReview);
      fetchReviews();
      setNewReview({
        location: '',
        rating: '',
        comment: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/Nightlife/');
      setReviews(response.data.reviews);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Nightlife-page">
      <h1>Nightlife Reviews</h1>
      <form onSubmit={handleSubmit}>
        <label>
          location:
          <input
            type="text"
            value={newReview.location}
            onChange={e =>
              setNewReview(prev => ({ ...prev, location: e.target.value }))
            }
          />
        </label>
        <label>
          Rating:
          <StarRatings
            rating={Number(newReview.rating)}
            starRatedColor="gold"
            changeRating={newRating =>
              setNewReview(prev => ({ ...prev, rating: String(newRating) }))
            }
            numberOfStars={5}
          />
        </label>
        <label>
          Comment:
          <textarea
            value={newReview.comment}
            onChange={e =>
              setNewReview(prev => ({ ...prev, comment: e.target.value }))
            }
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="reviews-container">
        <h2>Reviews:</h2>
        {reviews.map(review => (
          <div key={review._id}>
            <h3>{review.location}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NightlifePage;