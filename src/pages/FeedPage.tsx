import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import PostEditor from "../components/PostEditor";
import PostList from "../components/PostList";
import Modal from "../components/Modal";
import AuthForm from "../components/AuthForm";

export default function FeedPage() {
  const { user, signOut } = useAuth();
  const [posts, setPosts] = useState([{ author: "Alice", content: "Welcome to the Atlys mini Feed!" }]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [modalMode, setModalMode] = useState<"signIn"|"signUp">("signIn");

  function handlePublish(content: string) {
    if (!user) { setShowAuthModal(true); return; }
    setPosts([{ author: user, content }, ...posts]);
  }

  return (
    <div className="page-container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontWeight: 700, fontSize: "1.6rem", marginBottom: 18 }}>Feed</h1>
        {user ? (
          <button className="btn-outline" onClick={signOut}>Sign Out</button>
        ) : (
          <button className="btn-outline" onClick={() => {setModalMode("signIn"); setShowAuthModal(true);}}>Sign In</button>
        )}
      </div>
      <PostEditor onPublish={handlePublish} />
      <PostList posts={posts} onInteract={() => !user && setShowAuthModal(true)} />
      <Modal open={showAuthModal} onClose={() => setShowAuthModal(false)}>
        <AuthForm
          mode={modalMode}
          switchMode={() => setModalMode(m => m === "signIn" ? "signUp" : "signIn")}
          onSuccess={() => setShowAuthModal(false)}
        />
      </Modal>
    </div>
  );
}
