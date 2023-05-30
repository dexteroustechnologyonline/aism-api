const express = require("express");
const {
  createBlog,
  getAllBlog,
  Uploadslider,
  Uploadthumbnail,
  Uploadicon,
  UploadImage,
  SlugUrlExist,
  DeleteBlog,
  UpdateBlog,
} = require("../controllers/BlogController");

const router = express.Router();
router.route("/new").post(createBlog);
router.route("/all").get(getAllBlog);
router.route("/blogimage").post(UploadImage);
router.route("/thumbnail").post(Uploadthumbnail);
router.route("/blogslugurl/:slugurl").get(SlugUrlExist);
router.route("/blogupdate/:id").put(UpdateBlog);
router.route("/blogdelete/:id").delete(DeleteBlog);

router.route("/slider").post(Uploadslider);
router.route("/icon").get(Uploadicon);

module.exports = router;
