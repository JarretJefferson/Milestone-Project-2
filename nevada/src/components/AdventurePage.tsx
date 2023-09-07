import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import './AdventurePage.css';

interface AdventureReview {
  _id?: string;
  location: string;
  rating: string;
  comment: string;
}

const AdventurePage: React.FC = () => {
  const [adventureReviews, setAdventureReviews] = useState<AdventureReview[]>([]);
  const [newAdventureReview, setNewAdventureReview] = useState<AdventureReview>({
    location: '',
    rating: '',
    comment: '',
  });
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    fetchAdventureReviews();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
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
      const response = await axios.get<{ reviews: AdventureReview[] }>('/api/adventureReviews');
      setAdventureReviews(response.data.reviews);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof AdventureReview) => {
    setNewAdventureReview(prev => ({ ...prev, [field]: e.target.value }));
  };

  const changeRating = (newRating: number) => {
    setRating(newRating);
    setNewAdventureReview(prev => ({ ...prev, rating: newRating.toString() }));
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
            onChange={(e) => handleInputChange(e, 'location')}
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
            onChange={(e) => handleInputChange(e, 'comment')}
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

