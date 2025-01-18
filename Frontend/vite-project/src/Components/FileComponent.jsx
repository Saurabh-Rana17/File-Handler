import { FileInput, Label } from "flowbite-react";
import React, { useState } from "react";
import FileInputWrapper from "./FileInputWrapper";
import ReactDropzone from "./ReactDropzone";

export default function FileComponent({ handleFileChange }) {
  const isDisabled = false;
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Select file" />
        <FileInputWrapper isDisabled={isDisabled}>
          <FileInput
            disabled={isDisabled}
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
