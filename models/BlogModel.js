const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const blogSchema = mongoose.Schema({
  blogTitle: {
    type: String,
    required: [true, "Please enter blogTitle name"],
    unique: [true, "slugUrl already exist"],
    trim: true,
  },
  slugUrl: {
    type: String,
    required: [true, "Please provide slugurl"],
    unique: [true, "slugUrl already exist"],
    trim: true,
  },
  blogContent: {
    type: String,
    required: [true, "Please enter  blogContent"],
  },
  blogMainContent: {
    type: String,
    default: "",
  },
  blogVideoLink: [
    {
      type: String,
      default: "",
    },
  ],

  slider: [
    {
      type: String,
    },
  ],
  thumbnail: {
    type: String,
  },
  icon: {
    type: String,
  },
  //   reporterId: {
  //     type: mongoose.Schema.ObjectId,
  //     required: [true, "reporterId Require"],
  //     ref: "Reporter",
  //   },
  //   reporterName: {
  //     type: String,
  //     required: [true, "Please enter  name"],
  //     trim: true,
  //   },

  //   email: {
  //     type: String,
  //     required: [true, "Please provide mobile"],
  //     trim: true,
  //   },

  //   mobile: {
  //     type: String,
  //     required: [true, "Please provide mobile"],
  //     trim: true,
  //   },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
