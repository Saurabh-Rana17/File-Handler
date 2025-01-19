const { deleteImageFromSupabase } = require("../services/supabase");

exports.delete = async (req, res) => {
  const filePath = req.params.filePath;
  try {
    await deleteImageFromSupabase({ filePath });
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error deleting image: " + error.message });
  }
};
