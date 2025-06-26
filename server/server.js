const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
const projectRoutes = require('./routes/project.routes');
app.use('/api/projects', projectRoutes);
app.use('/api/bids', require('./routes/bid.routes'));
app.use('/api/users', require('./routes/user.routes'));
const bidRoutes = require('./routes/bid.routes');
app.use('/api/bids', bidRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));