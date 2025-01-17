import React, { useState } from "react";
import Title from "./Title";
import FileComponent from "./FileComponent";
import LightBoxViewer from "./LightBoxViewer";

function ImageUploadComponent() {
  const [file, setFile] = useState("");
  const [publicUrl, setUrl] = useState("");

  function handleFileChange(e) {
    let image = e.target.files[0];
    setFile(image);
    if (image) {
      let url = URL.createObjectURL(image);
      setUrl(url);
    }
  }

  function handleRemove() {
    setUrl("");
    setFile("");
  }
  console.log(file, publicUrl);
  return (
    <>
      <div className="max-w-xl mt-6 border border-black rounded-md p-4 m-auto">
        <Title />
        {publicUrl ? (
          <LightBoxViewer handleRemove={handleRemove} images={[publicUrl]} />
        ) : (
          <FileComponent handleFileChange={handleFileChange} />
        )}
      </div>
    </>
  );
}

export default ImageUploadComponent;
