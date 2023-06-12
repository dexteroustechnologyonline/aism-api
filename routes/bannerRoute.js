const express = require("express");
const {
  createBanner,
  getAllBanner,
  DeleteBanner,
  UploadBannerDeskImage,

} = require("../controllers/BannerController");

const router = express.Router();
router.route("/new").post(createBanner);
router.route("/all").get(getAllBanner);
router.route("/:id").delete(DeleteBanner);
router.route("/bannerimg").post(UploadBannerDeskImage);

module.exports = router;
