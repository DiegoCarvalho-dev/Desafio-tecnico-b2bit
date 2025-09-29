import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Desafio B2bit — Frontend</p>
      </div>
    </footer>
  );
}
