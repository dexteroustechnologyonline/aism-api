const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
// var session = require("express-session");

const errorMiddleware = require("./middleware/error");

// const PORT = process.env.PORT || 4000;

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//Rotes Imports

const admin = require("./routes/adminRoute");
app.use("/api/v1/admin", admin);

const registration = require("./routes/registrationRoute");
app.use("/api/v1/registration", registration);

const contactDetails = require("./routes/contactRoute");
app.use("/api/v1/contact", contactDetails);

const blog = require("./routes/blogRoute");
app.use("/api/v1/blog", blog);

const vlog = require("./routes/vlogRoute");
app.use("/api/v1/vlog", vlog);

const banner = require("./routes/bannerRoute");
app.use("/api/v1/banner", banner);

const notification = require("./routes/notificationRoute");
app.use("/api/v1/notification", notification);

app.use(errorMiddleware);

module.exports = app;
