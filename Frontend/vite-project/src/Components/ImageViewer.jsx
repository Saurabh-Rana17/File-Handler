import React from "react";

export default function ImageViewer({ url }) {
  return (
    <>
      <div>
        {url && (
          <>
            <p className="mt-2 text-center">SELECTED File</p>
            <div className="w-60 m-auto h-60 rounded-lg">
              <img className="w-full h-full object-cover " src={url} alt="" />
            </div>
          </>
        )}
      </div>
    </>
  );
}
