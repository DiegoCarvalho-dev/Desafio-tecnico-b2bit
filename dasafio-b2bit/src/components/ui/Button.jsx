import React from "react";

export default function Button({ children, type = "button", onClick, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
