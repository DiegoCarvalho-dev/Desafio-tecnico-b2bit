import React from "react";
import { Navigate } from "react-router-dom";
import { getItem } from "../utils/storage";

export default function ProtectedRoute({ children }) {
  const token = getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
