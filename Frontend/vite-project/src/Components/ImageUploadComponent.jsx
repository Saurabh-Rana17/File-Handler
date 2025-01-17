import React, { useState } from "react";
import Title from "./Title";
import FileComponent from "./FileComponent";
import ImageViewer from "./ImageViewer";

function ImageUploadComponent() {
  const [file, setFile] = useState();
  const [url, setUrl] = useState("");
  function handleFileChange(e) {
    let f = e.target.files[0];
    setFile(f);
    if (f) {
      let u = URL.createObjectURL(f);
      setUrl(u);
    }
  }
  console.log(file, url);

  return (
    <>
      <div className="max-w-xl mt-6 border border-black rounded-md p-4 m-auto">
        <Title />
        <FileComponent handleFileChange={handleFileChange} />
        <ImageViewer url={url} />
      </div>
    </>
  );
}

export default ImageUploadComponent;
