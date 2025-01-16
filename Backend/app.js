// Import required libraries
const express = require("express");
const multer = require("multer");
const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());
const port = 5000; // Change this if needed

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Set up multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to handle image upload
app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    // Get the file details
    const { originalname, buffer, mimetype } = req.file;

    // Create a unique file path
    const filePath = `${Date.now()}_${originalname}`;

    // Upload the file to Supabase Storage
    const { data, error } = await supabase.storage
      .from("images") // 'images' is the bucket name
      .upload(filePath, buffer, {
        contentType: mimetype,
      });

    if (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
    console.log(data);

    // Get the public URL of the uploaded file
    const { data: publicURL } = supabase.storage
      .from("images")
      .getPublicUrl(filePath);

    // if (urlError) {
    //   return res.status(500).json({ error: urlError.message });
    // }

    console.log(publicURL.publicUrl, filePath);

    // Return the public URL of the uploaded image
    res.status(200).json({ publicURL: publicURL.publicUrl });
  } catch (error) {
    res.status(500).json({ error: "Error uploading image: " + error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
