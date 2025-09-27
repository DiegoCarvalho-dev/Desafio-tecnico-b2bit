import React from "react";

function Card({ title, value }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
      <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
      <p className="text-2xl font-bold text-blue-600 mt-2">{value}</p>
    </div>
  );
}

export default Card;
