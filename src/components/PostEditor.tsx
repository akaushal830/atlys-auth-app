import React, { useState } from "react";
type Props = { onPublish: (content: string) => void; };

export default function PostEditor({ onPublish }: Props) {
  const [val, setVal] = useState("");
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <input
        className="w-full"
        placeholder="What's on your mind?"
        value={val}
        onChange={e => setVal(e.target.value)}
      />
      <button className="btn mr-2"
        onClick={() => { if(val.trim()){ onPublish(val); setVal(""); } }}>
        Publish
      </button>
      <button className="btn-outline" onClick={() => alert("function not implemented")}>Other</button>
    </div>
  );
}
