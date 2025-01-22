import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function MyEditor() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    // "bullet",
    "indent",
    "link",
    "image",
  ];
  console.log(value);

  return (
    <>
      <div className=" w-3/4 m-auto">
        <ReactQuill
          modules={modules}
          formats={formats}
          theme="snow"
          value={value}
          onChange={setValue}
        />
        <div>
          <h3>Preview:</h3>
          <div className="border" dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      </div>
    </>
  );
}
