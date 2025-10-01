import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import { getProducts } from "../services/api";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const res = await getProducts();
        setProdutos(res);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    }
    carregarProdutos();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Nossos Produtos</h1>
      <Carousel items={produtos} />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
