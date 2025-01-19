const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");
const deleteController = require("../controllers/deleteController");
const upload = require("../config/multer");
// POST route for image upload

router.post("/upload", upload.single("image"), uploadController.handleUpload);
router.post("/delete", deleteController.delete);

module.exports = router;
