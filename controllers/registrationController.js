const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Register = require("../models/registrationModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

exports.createRegister = async (req, res, next) => {
  try {
    const register = await Register.create(req.body);
    res.status(201).json({
      success: true,
      register,
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

exports.getAllRegister = catchAsyncErrors(async (req, res) => {
  try {
    const register = await Register.find();
    res.status(200).json({
      success: true,
      register: register,
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

exports.getbycertificateNo = catchAsyncErrors(async (req, res) => {
  try {
    const register = await Register.findOne({certificate:req.params.certificateNo});
    res.status(200).json({
      success: true,
      register: register,
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

