const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Vlog = require("../models/vlogModel");

exports.createVlog = async (req, res, next) => {
  try {
    const vlog = await Vlog.create(req.body);
    res.status(201).json({
      success: true,
      vlog,
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

exports.getAllVlog = catchAsyncErrors(async (req, res) => {
  try {
    const vlog = await Vlog.find();
    res.status(200).json({
      success: true,
      vlog: vlog,
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

exports.SlugUrlExist = catchAsyncErrors(async (req, res, next) => {
  try {
    let vlog = await Vlog.findOne({ slugUrl: req.params.slugurl });

    if (!vlog) {
      return res.status(500).json({
        success: false,
        message: "new vlog SlugUrl",
      });
    }

    return res.status(200).json({
      success: true,
      message: " vlog SlugUrl already exist",
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

exports.DeleteVlog = catchAsyncErrors(async (req, res, next) => {
  try {
    let vlog = await Vlog.findById(req.params.id);
    if (!vlog) {
      return res.status(500).json({
        success: false,
        message: "vlog not found",
      });
    }
    await vlog.remove();
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
