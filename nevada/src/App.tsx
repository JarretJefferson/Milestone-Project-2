import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import HomePage from './components/HomePage';
import FoodPage from './components/FoodPage';
import AdventurePage from './components/AdventurePage';
import ShoppingPage from './components/ShoppingPage';
import HistoricalPage from './components/HistoricalPage';
import NightlifePage from './components/NightlifePage';

axios.defaults.baseURL = "http://localhost:3003";

const App: FC = () => {
  const [, setExamples] = useState<string[]>([]);
  const [text, setText] = useState<string>('');
  const [restaurant, setRestaurant] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  useEffect(() => { fetchExamples(); }, []);

  const fetchExamples = async (): Promise<void> => {
    try {
      const response = await axios.get('/api/example');
      setExamples(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addExample = async (): Promise<void> => {
    try {
      await axios.post('/api/example/add', { text });
      fetchExamples();
      setText('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //foods
  const submitReview = async (): Promise<void> => {
    try {
      await axios.post('/api/reviews/submit', { restaurant, rating, comment });
      
      setRestaurant('');
      setRating('');
      setComment('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Router>
      <NavigationBar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/adventure" element={<AdventurePage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/historical" element={<HistoricalPage />} />
        <Route path="/nightlife" element={<NightlifePage />} />
      </Routes>
    </Router>
  );
};

export default App;

