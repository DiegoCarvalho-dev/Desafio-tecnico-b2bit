import React from "react";

export default function StatCard({ title, value }) {
  return (
    <div style={{
      background: "white",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      minWidth: "160px",
      textAlign: "center"
    }}>
      <h3 style={{ margin: "0 0 8px 0", fontSize: "14px", color: "#555" }}>{title}</h3>
      <p style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}
