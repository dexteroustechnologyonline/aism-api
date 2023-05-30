const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Blog = require("../models/BlogModel");
const cloudinary = require("cloudinary");

exports.createBlog = async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({
      success: true,
      blog,
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

exports.getAllBlog = catchAsyncErrors(async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json({
      success: true,
      blog: blog,
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

exports.UploadImage = catchAsyncErrors(async (req, res, next) => {
  try {
    const slider = await cloudinary.v2.uploader.upload(req.body.slider, {
      folder: "Blog/Slider",
      width: 800,
      height: 350,
      crop: "scale",
    });
    const sliders = slider.secure_url;

    res.status(200).json({
      success: true,
      sliders,
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

exports.Uploadthumbnail = catchAsyncErrors(async (req, res, next) => {
  try {
    const thumbnail = await cloudinary.v2.uploader.upload(req.body.thumbnail, {
      folder: "Blog/Thumbnail",
      width: 350,
      height: 280,
      crop: "scale",
    });
    const thumbnails = thumbnail.secure_url;

    const icon = await cloudinary.v2.uploader.upload(req.body.thumbnail, {
      folder: "Blog/Icon",
      width: 100,
      height: 75,
      crop: "scale",
    });
    const icons = icon.secure_url;
    res.status(200).json({
      success: true,
      thumbnails,
      icons,
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
    let blog = await Blog.findOne({ slugUrl: req.params.slugurl });

    if (!blog) {
      return res.status(500).json({
        success: false,
        message: "new blog SlugUrl",
      });
    }

    return res.status(200).json({
      success: true,
      message: " blog SlugUrl already exist",
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

exports.DeleteBlog = catchAsyncErrors(async (req, res, next) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(500).json({
        success: false,
        message: "blog not found",
      });
    }
    await blog.remove();
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

exports.UpdateBlog = catchAsyncErrors(async (req, res, next) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(500).json({
        success: false,
        message: "blog not found",
      });
    }
    blog = await blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      blog: blog,
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

exports.Uploadslider = catchAsyncErrors(async (req, res, next) => {
  try {
    const slider = await cloudinary.v2.uploader.upload(req.body.slider, {
      folder: "Blog/Slider",
      width: 800,
      height: 350,
      crop: "scale",
    });

    const sliders = slider.secure_url;
    res.status(200).json({
      success: true,
      sliders,
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

exports.Uploadicon = catchAsyncErrors(async (req, res, next) => {
  try {
    const icon = await cloudinary.v2.uploader.upload(req.body.icon, {
      folder: "Blog/Icon",
      width: 120,
      height: 120,
      crop: "scale",
    });

    const icons = icon.secure_url;
    res.status(200).json({
      success: true,
      icons,
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
