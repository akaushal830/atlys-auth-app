import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="page-container text-center">
      <AuthForm mode="signIn" switchMode={() => navigate("/signup")} onSuccess={() => navigate("/")} />
    </div>
  );
}
