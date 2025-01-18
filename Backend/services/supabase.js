const supabase = require("../models/supabaseClient");

const uploadImageToSupabase = async (filePath, buffer, mimetype) => {
  const { data, error } = await supabase.storage
    .from("images") // 'images' is the bucket name
    .upload(filePath, buffer, {
      contentType: mimetype,
    });

  if (error) {
    throw new Error(error.message);
  }

  const { data: publicURL } = supabase.storage
    .from("images")
    .getPublicUrl(filePath);

  return { publicURL: publicURL.publicUrl, filePath: filePath };
};

const deleteImageFromSupabase = async ({ filePath }) => {
  const { data, error } = await supabase.storage
    .from("images")
    .remove([filePath]);
  if (error) {
    throw new Error(error.message);
  }
};

module.exports = { uploadImageToSupabase, deleteImageFromSupabase };
