const express = require("express");
const {
    createRegister,getAllRegister,getbycertificateNo
} = require("../controllers/registrationController");

const router = express.Router();
router.route("/new").post(createRegister);
router.route("/all").get(getAllRegister);
router.route("/getbycertificateNo/:certificateNo").get(getbycertificateNo);


module.exports = router;
