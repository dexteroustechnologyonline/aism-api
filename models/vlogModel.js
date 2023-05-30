const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const vlogSchema = mongoose.Schema({
  vlogName: {
    type: String,
    required: [true, "Please enter vlogName"],
    unique: [true, "slugUrl already exist"],
    trim: true,
  },
  slugUrl: {
    type: String,
    required: [true, "Please provide slugurl"],
    unique: [true, "slugUrl already exist"],
    trim: true,
  },
  vlogurl: {
    type: String,
    required: [true, "Please enter vlogurl"],
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Vlog", vlogSchema);
