import React, { useEffect, useState } from "react";
import { getDashboard } from "../services/api";
import "../styles/Dashboard.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Voltar ao topo"
    >
      ↑
    </button>
  );
}

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const d = await getDashboard();
        if (!mounted) return;
        setData(d);
      } catch (err) {
        console.error("Erro carregando dashboard:", err);
        setError(err.message || "Erro ao carregar dados");
      }
    }
    load();
    return () => (mounted = false);
  }, []);

  const user = (() => {
    try {
      const raw = localStorage.getItem("user");
      if (!raw) return null;
      const u = JSON.parse(raw);
      return u?.name || u?.username || null;
    } catch {
      return null;
    }
  })();

  if (error) return <div className="dashboard-shell">Erro: {error}</div>;
  if (!data) return <div className="dashboard-shell">Carregando...</div>;

  const { users = 0, sales = 0, revenue = 0, monthlySales = [] } = data;
  
  
  const maxGridValue = 10000;
  const gridSteps = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
  const visibleGridSteps = gridSteps;

  return (
    <div className="dashboard-shell">
      <header className="dashboard-topbar">
        <div className="welcome">
          <h1>Olá{user ? `, ${user}` : ""}</h1>
          <p className="subtitle">Resumo do desempenho — painel principal</p>
        </div>
        <div className="quick-info">Painel</div>
      </header>

      <main className="dashboard-grid">
        <section className="left-panel">
          <div className="integrated-chart-container">
            <div className="chart-header">
              <h2>Desempenho de Vendas</h2>
              <p className="muted">Blocos representam volume de vendas por mês</p>
            </div>

            <div className="chart-area">
              <div className="grid-labels">
                {visibleGridSteps
                  .slice()
                  .reverse()
                  .map((value, index) => (
                    <div key={value} className="grid-label">
                      
                      {value === 0 ? '0' : value.toLocaleString()}
                    </div>
                  ))
                }
              </div>

              <div className="blocks-container">
                {monthlySales.map((monthData) => {
                  const height = (monthData.sales / 10000) * 288;
                  return (
                    <div key={monthData.month} className="chart-block">
                      <div 
                        className="block-bar"
                        style={{ 
                          height: `${Math.max(height, 4)}px`,
                        }}
                        title={`${monthData.month}: R$ ${monthData.sales.toLocaleString()}`}
                      />
                      <div className="block-info">
                        <div className="block-month">{monthData.month}</div>
                        <div className="block-value">R$ {monthData.sales.toLocaleString()}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <aside className="right-panel">
          <div className="stat-cards">
            <div className="stat-card users">
              <div className="label">Usuários Ativos</div>
              <div className="number">{users.toLocaleString()}</div>
              <div className="foot muted">Contas ativas no sistema</div>
            </div>

            <div className="stat-card sales">
              <div className="label">Vendas Totais</div>
              <div className="number">{sales.toLocaleString()}</div>
              <div className="foot muted">Transações este mês</div>
            </div>

            <div className="stat-card revenue">
              <div className="label">Receita Líquida</div>
              <div className="number">R$ {revenue.toLocaleString()}</div>
              <div className="foot muted">Receita acumulada</div>
            </div>
          </div>

          <div className="secondary-widgets">
            <div className="widget">
              <h4 className="widget-title">Resumo Rápido</h4>
              <ul className="mini-list">
                <li>Pedidos pendentes: 12</li>
                <li>Novos clientes: 8</li>
                <li>Meta de vendas: 75%</li>
                <li>Tickets abertos: 3</li>
              </ul>
            </div>
          </div>
        </aside>
      </main>

      <ScrollToTopButton />
    </div>
  );
}