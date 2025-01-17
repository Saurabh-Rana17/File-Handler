import { FileInput, Label } from "flowbite-react";
import React, { useState } from "react";
import FileInputWrapper from "./FileInputWrapper";

export default function FileComponent({ handleFileChange }) {
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Select file" />
        <FileInputWrapper>
          <FileInput
            accept="image/*"
            onChange={handleFileChange}
            id="dropzone-file"
            className="hidden"
          />
        </FileInputWrapper>
      </div>
    </>
  );
}
