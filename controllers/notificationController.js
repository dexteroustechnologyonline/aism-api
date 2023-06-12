const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Notification = require("../models/NotificationModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

exports.createNotification = async (req, res, next) => {
  try {
    const notification = await Notification.create(req.body);
    res.status(201).json({
      success: true,
      notification,
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

exports.getAllNotification = catchAsyncErrors(async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json({
      success: true,
      notifications,
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

exports.DeleteNotification = catchAsyncErrors(async (req, res, next) => {
  try {
    let notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(500).json({
        success: false,
        message: "Notification not found",
      });
    }
    await notification.remove();
    res.status(200).json({
      success: true,
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