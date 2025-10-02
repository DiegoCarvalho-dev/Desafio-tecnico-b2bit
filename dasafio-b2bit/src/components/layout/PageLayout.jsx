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
      padding: '24px',
      overflowY: 'auto'
    }}>
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
        zIndex: '100',
        margin: '-24px -24px 24px -24px'
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '700' }}>Relatórios</h1>
          <p style={{ margin: '6px 0 0 0', color: '#cbd5e1', fontSize: '14px' }}>
            Análises detalhadas e insights de performance
          </p>
        </div>
        <button style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          📊 Exportar Tudo
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '24px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: '700' }}>📈 Relatório de Vendas</h2>
          <p style={{ margin: '0 0 20px 0', color: '#cbd5e1' }}>
            Análise completa do desempenho de vendas por período, métricas de conversão e tendências.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white',
              border: 'none',
              padding: '10px 16px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Gerar Relatório
            </button>
            <button style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '10px 16px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Visualizar
            </button>
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: '700' }}>👥 Relatório de Usuários</h2>
          <p style={{ margin: '0 0 20px 0', color: '#cbd5e1' }}>
            Estatísticas de usuários ativos, engajamento e crescimento da base.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white',
              border: 'none',
              padding: '10px 16px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Gerar Relatório
            </button>
            <button style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '10px 16px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Visualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}