import { useState } from "react";
import axios from "axios";

export function useFileUpload() {
  const [publicURL, setPublicUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [filePath, setFilePath] = useState("");

  async function handleFileChange(e) {
    const image = e.target.files[0];
    const currFilePath = `${Date.now()}_${image.name}`;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("filePath", currFilePath);
    setUploading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/images/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setPublicUrl(res.data.publicURL);
      setFilePath(currFilePath);
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleRemove() {
    if (!filePath) {
      return alert("no image to delete");
    }
    console.log(filePath);
    try {
      const res = await axios.delete(
        `http://localhost:5000/images/delete/${filePath}`
      );
      console.log(res);
      setPublicUrl("");
      setFilePath("");
    } catch (error) {
      alert("Error: " + error.message);
    }
  }

  return {
    publicURL,
    uploading,
    filePath,
    handleFileChange,
    handleRemove,
  };
}
