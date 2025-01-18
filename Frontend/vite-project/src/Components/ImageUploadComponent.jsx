import React, { useState } from "react";
import Title from "./Title";
import FileComponent from "./FileComponent";
import LightBoxViewer from "./LightBoxViewer";
import axios from "axios";
import Uploading from "./Uploading";
function ImageUploadComponent() {
  const [publicURL, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  async function handleFileChange(e) {
    let image = e.target.files[0];
    const filePath = `${Date.now()}_${image.name}`;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("filePath", filePath);
    setUploading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/media/images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data  ",
          },
        }
      );
      console.log(res);
      setUrl(res.data.publicURL);
    } catch (error) {
      console.log(error);
      alert("error " + error.message);
    } finally {
      setUploading(false);
    }
  }

  function handleRemove() {
    setUrl("");
  }
  console.log(publicURL);
  return (
    <>
      <div className="max-w-xl mt-6 border border-black rounded-md p-4 m-auto">
        <Title />
        {uploading && <Uploading />}
        {!uploading && publicURL && (
          <LightBoxViewer handleRemove={handleRemove} images={[publicURL]} />
        )}
        {!uploading && !publicURL && (
          <FileComponent handleFileChange={handleFileChange} />
        )}
      </div>
    </>
  );
}

export default ImageUploadComponent;
