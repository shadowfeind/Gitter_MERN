const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("User", userModel);
