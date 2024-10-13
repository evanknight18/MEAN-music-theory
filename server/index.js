const express = require('express');
const connectDB = require('./config/db');
const theoryRoutes = require('./routes/theoryRoutes');
const rhythmRoutes = require('./routes/rhythmRoutes');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/theory', theoryRoutes);
app.use('/api/rhythms', rhythmRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
