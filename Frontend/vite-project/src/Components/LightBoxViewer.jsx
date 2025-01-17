import { Button } from "flowbite-react";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export default function LightBoxViewer({ images = [] }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = () => {
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <div className="">
      <div className="w-60 m-auto">
        <div className="cursor-pointer border bg-slate-100 border-slate-200 w-60 h-60 m-auto">
          <img
            className="h-full w-full object-contain"
            src={images[0]}
            onClick={() => openImageViewer()}
            width="300"
            alt=""
          />
        </div>
        <Button fullSized color="failure" className="rounded-none">
          Remove
        </Button>
      </div>

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
