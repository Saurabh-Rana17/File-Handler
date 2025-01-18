import { Button } from "flowbite-react";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import SmallImage from "./SmallImage";

export default function LightBoxViewer({ images = [], handleRemove }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = () => {
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <div className="">
      <SmallImage
        handleRemove={handleRemove}
        images={images}
        openImageViewer={openImageViewer}
      />

      {isViewerOpen && (
        <ImageViewer
          backgroundStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark with some transparency
            cursor: "pointer",
          }}
          src={images}
          currentIndex={0}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}
