import { useEffect, useState } from "react";
import axios from "axios";

const MAX_FILE_SIZE = 11 * 1024; // 11 KB in bytes

export function useFileUpload(dir = "") {
  const [error, setError] = useState("");
  const [publicURL, setPublicUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [filePath, setFilePath] = useState("");
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (publicURL) {
        // Use sendBeacon to send delete request to backend
        const url = `http://localhost:5000/images/delete/${encodeURIComponent(
          filePath
        )}`;
        const payload = JSON.stringify({ filePath });
        const headers = { "Content-Type": "application/json" };

        // Construct and send the request
        const blob = new Blob([payload], headers);
        navigator.sendBeacon(url, blob);
      }
    };

    // Attach the beforeunload event
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [publicURL, filePath]);

  async function handleFileChange(image) {
    setError("");
    if (image && image.size > MAX_FILE_SIZE) {
      setError("File size should not exceed 10 KB.");
      return;
    }

    const currFilePath = dir + `${Date.now()}_${image.name}`;
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
    setRemoving(true);
    try {
      const res = await axios.post(
        `http://localhost:5000/images/delete/${encodeURIComponent(filePath)}`
      );
      setPublicUrl("");
      setFilePath("");
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setRemoving(false);
    }
  }

  return {
    publicURL,
    uploading,
    filePath,
    handleFileChange,
    handleRemove,
    removing,
    error,
  };
}
