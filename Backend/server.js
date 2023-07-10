const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3003;

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/reviews', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Parse JSON bodies
app.use(express.json());

// Routes
const foodRoutes = require('./routes/foodRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use('/api/foods', foodRoutes);
app.use('/api/reviews', reviewRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'nevada', 'build')));

// Catch-all route for handling React routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'nevada', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
