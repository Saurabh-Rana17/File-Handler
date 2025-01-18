const multer = require("multer");
const supabase = require("../models/supabaseClient");

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

exports.uploadImage = upload.single("image");

exports.handleUpload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    // Get the file details
    const { originalname, buffer, mimetype } = req.file;

    // Create a unique file path
    const filePath = req.body.filePath;

    // Upload the file to Supabase Storage
    const { data, error } = await supabase.storage
      .from("images") // 'images' is the bucket name
      .upload(filePath, buffer, {
        contentType: mimetype,
      });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Get the public URL of the uploaded file
    const { data: publicURL } = supabase.storage
      .from("images")
      .getPublicUrl(filePath);

    res.status(200).json({ publicURL: publicURL.publicUrl });
  } catch (error) {
    res.status(500).json({ error: "Error uploading image: " + error.message });
  }
};
