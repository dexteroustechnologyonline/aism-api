const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Contact = require("../models/contactModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

exports.createContact = async (req, res, next) => {
    try {
      const contact = await Contact.create(req.body);
      res.status(201).json({
        success: true,
        contact:contact,
      });
    } catch (error) {
      res.status(501).json({
        success: false,
        massage: error._message,
        error: error,
      });
      res.status(400).json({
        success: false,
        massage: error._message,
        error: error,
      });
      res.status(500).json({
        success: false,
        massage: error._message,
        error: error,
      });
    }
  };
  
  exports.getAllContact = catchAsyncErrors(async (req, res) => {
    try {
      const contact = await Contact.find();
      res.status(200).json({
        success: true,
        contact: contact,
      });
    } catch (error) {
      res.status(501).json({
        success: false,
        massage: error._message,
        error: error,
      });
      res.status(400).json({
        success: false,
        massage: error._message,
        error: error,
      });
      res.status(500).json({
        success: false,
        massage: error._message,
        error: error,
      });
    }
  });

