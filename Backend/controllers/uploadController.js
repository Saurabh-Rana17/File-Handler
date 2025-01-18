const { uploadImageToSupabase } = require("../services/supabase");

exports.handleUpload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const filePath = req.body.filePath;

  try {
    // Get the file details
    const { buffer, mimetype } = req.file;
    // Upload the file to Supabase Storage
    const publicURL = await uploadImageToSupabase(filePath, buffer, mimetype);

    res.status(200).json({ publicURL });
  } catch (error) {
    res.status(500).json({ error: "Error uploading image: " + error.message });
  }
};
