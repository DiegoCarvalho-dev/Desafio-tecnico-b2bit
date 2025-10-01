import React from "react";
import ProductCard from "./ProductCard";
import "./Carousel.css";

export default function Carousel({ items }) {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
