import React from "react";
import "./Card.css";

export default function Card({ children, title, value, icon }) {
  return (
    <div className="card">
      {title && (
        <div className="card-header">
          {icon && <span className="card-icon">{icon}</span>}
          <h3>{title}</h3>
        </div>
      )}
      <div className="card-body">
        {value && <p>{value}</p>}
        {children}
      </div>
    </div>
  );
}
