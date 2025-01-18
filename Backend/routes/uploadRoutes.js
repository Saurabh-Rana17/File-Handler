const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");

// POST route for image upload
router.post(
  "/images",
  uploadController.uploadImage,
  uploadController.handleUpload
);

module.exports = router;
