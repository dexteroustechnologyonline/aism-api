const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const registerSchema = mongoose.Schema({
  certificate: {
    type: String,
  },
  name:{
    type:String,
  },
  fname:{
    type:String,
  },
  course:{
    type:String,
  },
  grade:{
    type:String,
  },
  date:{
    type:String,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model("Register", registerSchema);
