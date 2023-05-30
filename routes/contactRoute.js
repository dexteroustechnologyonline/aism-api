const express = require("express");
const {
    createContact,getAllContact
} = require("../controllers/contactController");

const router = express.Router();
router.route("/new").post(createContact);
router.route("/all").get(getAllContact);

module.exports = router;
