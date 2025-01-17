import { Button } from "flowbite-react";
import React from "react";

export default function ImageViewer({ url }) {
  return (
    <>
      {url && (
        <div className="w-60 m-auto">
          <p className="mt-2 text-center">SELECTED File</p>
          <div className="border bg-slate-100 w-60 h-60 border-slate-200">
            <img className="w-full h-full object-contain " src={url} alt="" />
          </div>
          <Button color="failure" fullSized className="mt-1 rounded-none">
            Delete
          </Button>
        </div>
      )}
    </>
  );
}
