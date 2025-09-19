const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(' MongoDB connected'))
.catch(err => console.error(' MongoDB connection error:', err));

// Routes
app.use('/api/contacts', require('./routes/contact'));
app.use('/api/services', require('./routes/services'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/blogs', require('./routes/blogs'));

// Root endpoint
app.get('/', (req, res) => {
    res.send('Backend API is running ');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
