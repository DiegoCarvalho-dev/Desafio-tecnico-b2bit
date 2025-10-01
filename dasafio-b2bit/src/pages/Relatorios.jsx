import React from "react";

export default function Relatorios() {
  return (
    <div style={{
      position: 'fixed',
      top: '-10px',
      left: '220px',
      right: '-10px',
      bottom: '-10px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      color: 'white',
      overflowY: 'auto',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    }}>
      
      {/* Header Profissional */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 32px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'sticky',
        top: '0',
        zIndex: '100'
      }}>
        <div>
          <h1 style={{ 
            margin: 0, 
            fontSize: '28px', 
            fontWeight: '700',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            📊 Relatórios
          </h1>
          <p style={{ 
            margin: '6px 0 0 0', 
            color: '#cbd5e1', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Análises detalhadas e insights de performance
          </p>
        </div>
        <button style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '12px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease'
        }}>
          📈 Exportar Tudo
        </button>
      </div>

      {/* Conteúdo Principal */}
      <div style={{
        padding: '32px',
        position: 'relative',
        zIndex: '1'
      }}>

        {/* Grid de Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '24px'
        }}>

          {/* Card Relatório de Vendas */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <h2 style={{ 
              margin: '0 0 16px 0', 
              fontSize: '20px', 
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '24px' }}>📈</span>
              Relatório de Vendas
            </h2>
            <p style={{ 
              margin: '0 0 24px 0', 
              color: '#cbd5e1',
              lineHeight: '1.5'
            }}>
              Análise completa do desempenho de vendas por período, métricas de conversão e tendências de mercado.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: '1'
              }}>
                Gerar Relatório
              </button>
              <button style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '12px 20px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: '1'
              }}>
                Visualizar
              </button>
            </div>
          </div>

          {/* Card Relatório de Usuários */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <h2 style={{ 
              margin: '0 0 16px 0', 
              fontSize: '20px', 
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '24px' }}>👥</span>
              Relatório de Usuários
            </h2>
            <p style={{ 
              margin: '0 0 24px 0', 
              color: '#cbd5e1',
              lineHeight: '1.5'
            }}>
              Estatísticas de usuários ativos, engajamento, crescimento da base e métricas de retenção.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: '1'
              }}>
                Gerar Relatório
              </button>
              <button style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '12px 20px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: '1'
              }}>
                Visualizar
              </button>
            </div>
          </div>

          {/* Card Relatório Financeiro */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <h2 style={{ 
              margin: '0 0 16px 0', 
              fontSize: '20px', 
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '24px' }}>💰</span>
              Relatório Financeiro
            </h2>
            <p style={{ 
              margin: '0 0 24px 0', 
              color: '#cbd5e1',
              lineHeight: '1.5'
            }}>
              Demonstrativos financeiros, fluxo de caixa, métricas de rentabilidade e projeções.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: '1'
              }}>
                Gerar Relatório
              </button>
              <button style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '12px 20px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: '1'
              }}>
                Visualizar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}