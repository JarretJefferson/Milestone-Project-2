import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import './Nightlife.css';

const NightlifePage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    location: '',
    rating: '',
    comment: '',
  });

  useEffect(()=>{ fetchReviews()},[])

  const handleSubmit = async (e) => {
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

  return React.createElement(
    'div',
    { className: 'Nightlife-page' },
    React.createElement('h1', null, 'Nightlife Reviews'),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement(
        'label',
        null,
        'location:',
        React.createElement('input', {
          type: 'text',
          value: newReview.location,
          onChange: (e) =>
            setNewReview({ ...newReview, location: e.target.value }),
        })
      ),
      React.createElement(
        'label',
        null,
        'Rating:',
        React.createElement(StarRatings, {
          rating: Number(newReview.rating),
          starRatedColor: 'gold',
          changeRating: (newRating) =>
            setNewReview({ ...newReview, rating: newRating }),
          numberOfStars: 5,
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
          React.createElement('h3', null, review.location),
          React.createElement('p', null, 'Rating: ', review.rating),
          React.createElement('p', null, review.comment)
        )
      )
    )
  );
};

export default NightlifePage;
