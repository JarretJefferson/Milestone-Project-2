import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import './ShoppingPage.css';

interface Review {
  _id?: string;
  location: string;
  rating: string;
  comment: string;
}

const ShoppingPage: React.FC = () => {
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
      await axios.post('/api/Shopping/submit', newReview);
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
      const response = await axios.get('/api/Shopping/');
      setReviews(response.data.reviews);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Shopping-page">
      <h1>Shopping Reviews</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
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
            name="rating"
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
            <StarRatings
              rating={Number(review.rating)}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
            />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;