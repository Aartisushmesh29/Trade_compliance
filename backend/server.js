const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require("cors");


dotenv.config();

const app = express();
app.use(cors())
app.use(bodyParser.json()); 

// Routes
app.use('/api/auth', authRoutes);

// Check server route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
