import React from "react";
type Props = { posts: {author: string; content: string;}[]; onInteract?: () => void };
export default function PostList({ posts, onInteract }: Props) {
  return (
    <div>
      {posts.map((post, idx) => (
        <div key={idx} style={{
          border: "1.5px solid #eee", borderRadius: 7, background: "#fafbfc",
          padding: 16, marginBottom: 12, boxShadow: "0 2px 6px rgba(0,0,0,0.045)",
        }}>
          <div style={{ fontWeight: 600, marginBottom: 2 }}>{post.author}</div>
          <div style={{ marginBottom: 8 }}>{post.content}</div>
          <div>
            <button className="btn-outline mr-2" onClick={() => alert("function not implemented")}>Like</button>
            <button className="btn-outline" onClick={() => alert("function not implemented")}>Comment</button>
          </div>
        </div>
      ))}
    </div>
  );
}
