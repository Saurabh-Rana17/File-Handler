import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function MyEditor() {
  const [value, setValue] = useState(
    `<p>normal</p><h1>heading</h1><h2>heading 2</h2><p><strong>Bold</strong></p><p><em>Italic</em></p><p><u>Underline</u></p><p><s>Strikethrough</s></p><blockquote>Quote</blockquote><ol><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>order list1</li><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span>order list 2</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>unorder list 1</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>unorder list2</li></ol><p class="ql-indent-3">left indent</p><p><br></p><p class="ql-indent-3"><br></p><p><br></p>`
  );

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
      <div className=" no-tailwindcss-base  w-3/4 m-auto">
        <ReactQuill
          className=""
          modules={modules}
          formats={formats}
          theme="snow"
          value={value}
          onChange={setValue}
        />
        <h3>Preview:</h3>
        <div className="border p-2">
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      </div>
    </>
  );
}
