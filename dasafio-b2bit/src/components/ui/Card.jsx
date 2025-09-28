import React from "react";
import "./Card.css";

export default function Card({ title, value, icon }) {
  return (
    <div className="card">
      <div className="card-header">
        {icon && <span className="card-icon">{icon}</span>}
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{value}</p>
      </div>
    </div>
  );
}
