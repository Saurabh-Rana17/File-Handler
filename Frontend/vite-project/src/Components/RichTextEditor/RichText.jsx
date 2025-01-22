import React, { useRef } from "react";
import JoditEditor from "jodit-react";

export default function RichText() {
  const editor = useRef(null);
  const [content, setContent] = React.useState("");
  console.log(content);
  return (
    <div className="m-auto w-1/2">
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
    </div>
  );
}
