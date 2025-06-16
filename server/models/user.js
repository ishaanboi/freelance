const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['client', 'freelancer', 'admin'],
    default: 'freelancer'
  },
  bio: String,
  skills: [String],
  portfolioLinks: [
    {
      title: String,
      url: String
    }
  ],
  hourlyRate: Number
});

module.exports = mongoose.model('User', userSchema);