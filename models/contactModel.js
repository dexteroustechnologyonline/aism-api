const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const ContactSchema = mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname:{
    type:String,
  },
  mobile:{
    type:String,
  },
  email:{
    type:String,
  },
  text:{
    type:String,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model("Contact", ContactSchema);
