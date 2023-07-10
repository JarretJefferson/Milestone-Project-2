import React, { useState } from 'react';
import axios from 'axios';
import './HistoricalPage.css';

const HistoricalPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    landmark: '',
    rating: '',
    comment: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/historical/reviews', newReview);
      fetchReviews();
      setNewReview({
        landmark: '',
        rating: '',
        comment: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/historical/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return React.createElement(
    'div',
    { className: 'historical-page' },
    React.createElement('h1', null, 'Historical Reviews'),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement(
        'label',
        null,
        'Landmark:',
        React.createElement('input', {
          type: 'text',
          value: newReview.landmark,
          onChange: (e) =>
            setNewReview({ ...newReview, landmark: e.target.value }),
        })
      ),
      React.createElement(
        'label',
        null,
        'Rating:',
        React.createElement('input', {
          type: 'number',
          value: newReview.rating,
          onChange: (e) =>
            setNewReview({ ...newReview, rating: e.target.value }),
        })
      ),
      React.createElement(
        'label',
        null,
        'Comment:',
        React.createElement('textarea', {
          value: newReview.comment,
          onChange: (e) =>
            setNewReview({ ...newReview, comment: e.target.value }),
        })
      ),
      React.createElement('button', { type: 'submit' }, 'Submit')
    ),
    React.createElement(
      'div',
      { className: 'reviews-container' },
      React.createElement('h2', null, 'Reviews:'),
      reviews.map((review) =>
        React.createElement(
          'div',
          { key: review._id },
          React.createElement('h3', null, review.landmark),
          React.createElement('p', null, 'Rating: ', review.rating),
          React.createElement('p', null, review.comment)
        )
      )
    )
  );
};

export default HistoricalPage;