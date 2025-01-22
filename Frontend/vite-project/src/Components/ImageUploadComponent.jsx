import React from "react";
import Title from "./Title";
import Uploading from "./Uploading";
import { useFileUpload } from "../hooks/useFileUpload";
import ReactDropzone from "./ReactDropzone";
import UploadedImage from "./UploadedImage";

function ImageUploadComponent() {
  const {
    error,
    uploading,
    removing,
    handleFileChange,
    publicURL,
    handleRemove,
    filePath,
  } = useFileUpload();

  return (
    <>
      <div className="max-w-xl mt-6 border border-black rounded-md p-4 m-auto">
        <Title />
        {uploading && <Uploading />}
        {!uploading && publicURL && (
          <UploadedImage
            removing={removing}
            handleRemove={handleRemove}
            images={[publicURL]}
          />
        )}
        {!uploading && !publicURL && (
          <ReactDropzone handleFileChange={handleFileChange} />
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </>
  );
}

export default ImageUploadComponent;
