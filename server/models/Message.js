const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    message: { type: String, required: true },
    user: { type: String },
    time: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
