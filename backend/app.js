const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const serviceRoutes = require('./routes/services');
const clientRoutes = require('./routes/clients');
const blogRoutes = require('./routes/blogs');
const contactRoutes = require('./routes/contacts');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/services', serviceRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contacts', contactRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/audit_company', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
