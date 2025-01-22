import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import RichTextViewer from "./RichTextViewer";

const RichText = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  console.log(content);

  return (
    <div className="prose w-1/2 m-auto">
      <JoditEditor
        ref={editor}
        value={content}
        config={{
          readonly: false, // all options from https://xdsoft.net/jodit/docs/,
          placeholder: placeholder || "Start typings...",
          defaultLineHeight: 0,
        }}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      />
      <div className=" mt-4  h-auto border space-y-9 py-2 px-2">
        <RichTextViewer content={content} />
      </div>
    </div>
  );
};

export default RichText;
