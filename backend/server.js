const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config();

const app = express();

const corsOptions = {
  origin: '*', // Allow all domains
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true, // If you're using cookies or authentication tokens
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'] // Specify custom headers that you expect from the frontend
};

app.use(cors(corsOptions));

app.use(bodyParser.json()); 

// Routes
app.use('/api/auth', authRoutes);

// Check server route
app.get('/', (req, res) => {
  res.send('API is working!');
}
);
const port = process.env.PORT || 3000; 
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error " + error);
  }
});

module.exports = app;  // Export app for Vercel serverless
