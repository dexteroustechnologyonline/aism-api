const express = require("express");

const { createVlog, getAllVlog,SlugUrlExist,DeleteVlog } = require("../controllers/vlogController");

const router = express.Router();

router.route("/new").post(createVlog);
router.route("/all").get(getAllVlog);
router.route("/vlogslugurl/:slugurl").get(SlugUrlExist);
router.route("/vlogdelete/:id").delete(DeleteVlog);

module.exports = router;
