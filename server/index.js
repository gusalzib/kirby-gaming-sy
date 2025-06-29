const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));



const memberRoutes = require('./routes/members');
  
app.use('/api/members', memberRoutes);
  
// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});
// Sample route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
  });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
