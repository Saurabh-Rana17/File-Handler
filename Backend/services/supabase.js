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

  return publicURL.publicUrl;
};

module.exports = { uploadImageToSupabase };
