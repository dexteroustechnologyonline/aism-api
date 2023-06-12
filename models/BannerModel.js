const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const bannerSchema = mongoose.Schema({
  name: {
    type: String,
  },

  DeskImg: {
    type: String,
  },

  show: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Banner", bannerSchema);
