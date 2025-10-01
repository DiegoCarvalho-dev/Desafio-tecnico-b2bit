import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (e) {
        console.error("Erro ao carregar produtos:", e);
        setError("Não foi possível carregar os produtos.");
      }
    }
    fetchProducts();
  }, []);

  if (error) return <div style={{ padding: 20, color: "red" }}>{error}</div>;
  if (!products.length) return <div style={{ padding: 20 }}>Carregando...</div>;

  return (
    <div className="container">
      <h1>Produtos</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
