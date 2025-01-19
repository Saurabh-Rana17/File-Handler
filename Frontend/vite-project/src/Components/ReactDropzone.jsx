import React from "react";
import { useDropzone } from "react-dropzone";

export default function ReactDropzone({ handleFileChange }) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: { "image/*": [] },
      onDrop: (file) => handleFileChange(file[0]),
      multiple: false,
    });

  return (
    <div className="container">
      <div
        {...getRootProps({
          className: `flex-1 flex flex-col items-center p-4 border-2 rounded-md border-dashed border-gray-300 bg-gray-50 font-semibold hover:bg-gray-100 cursor-pointer
          ${isFocused ? "border-[#2196f3]" : ""} 
          ${isDragAccept ? "bg-[#00e676]" : ""}
          ${isDragReject ? "bg-[#ff1744] " : ""}
          `,
        })}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PNG, JPG, JPEG or GIF
          </p>
        </div>
      </div>
    </div>
  );
}
