import { Button } from "flowbite-react";
import React from "react";

export default function SmallImage({ handleRemove, images, openImageViewer }) {
  return (
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
      <Button
        onClick={handleRemove}
        fullSized
        color="failure"
        className="rounded-none"
      >
        Remove
      </Button>
    </div>
  );
}
