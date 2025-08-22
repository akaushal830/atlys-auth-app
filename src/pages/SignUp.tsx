import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="page-container text-center">
      <AuthForm mode="signUp" switchMode={() => navigate("/signin")} onSuccess={() => navigate("/")} />
    </div>
  );
}


