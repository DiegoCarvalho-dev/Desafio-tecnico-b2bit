import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image || "/assets/product-placeholder.png"} alt={product.name} style={{width:"100%", height:140, objectFit:"cover", borderRadius:6}} />
      <h3 style={{margin:"12px 0 6px"}}>{product.name}</h3>
      <p style={{margin:0}}>R$ {product.price.toFixed(2)}</p>
      <div style={{marginTop:10}}>
        <button className="btn">Adicionar</button>
      </div>
    </div>
  );
}
