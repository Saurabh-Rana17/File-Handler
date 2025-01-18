const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");
const upload = require("../config/multer");

// POST route for image upload
router.post("/images", upload.single("image"), uploadController.handleUpload);

module.exports = router;
