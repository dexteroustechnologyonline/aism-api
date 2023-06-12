const express = require("express");
const {
  createNotification,
  getAllNotification,
  DeleteNotification,

} = require("../controllers/notificationController");

const router = express.Router();
router.route("/new").post(createNotification);
router.route("/all").get(getAllNotification);
router.route("/:id").delete(DeleteNotification);

module.exports = router;
