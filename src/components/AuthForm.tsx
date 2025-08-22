import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
type Props = { mode: "signIn"|"signUp", switchMode: () => void, onSuccess?: () => void };
export default function AuthForm({ mode, switchMode, onSuccess }: Props) {
  const { signIn, signUp } = useAuth();
  const [username, setUsername] = useState("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (mode === "signIn") signIn(username);
    else signUp(username);
    onSuccess && onSuccess();
  }
  return (
    <form onSubmit={handleSubmit} style={{ minWidth: 240 }}>
      <div className="text-center mb-2">
        <h2 style={{ fontWeight: 700, fontSize: "1.35rem", marginBottom: "10px" }}>
          {mode === "signIn" ? "Sign In" : "Sign Up"}
        </h2>
      </div>
      <input
        className="w-full mb-2"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Enter a username"
        required
      />
      <button type="submit" className="btn w-full">{mode === "signIn" ? "Sign In" : "Sign Up"}</button>
      <button type="button" className="btn-outline w-full mt-2" onClick={switchMode}>
        {mode === "signIn" ? "Need an account? Sign up" : "Already have an account? Sign in"}
      </button>
    </form>
  );
}
