import React, { useState } from "react";

export default function Integrations() {
  const [integrations, setIntegrations] = useState([
    {
      id: 1,
      name: "PagSeguro",
      description: "Processamento de pagamentos brasileiro",
      status: "connected",
      icon: "💳",
      category: "pagamento"
    },
    {
      id: 2,
      name: "Google Analytics",
      description: "Análise de dados e métricas do site",
      status: "disconnected",
      icon: "📊",
      category: "analytics"
    },
    {
      id: 3,
      name: "Slack",
      description: "Notificações e comunicação em tempo real",
      status: "connected",
      icon: "💬",
      category: "comunicacao"
    },
    {
      id: 4,
      name: "WhatsApp Business",
      description: "Integração para mensagens automáticas",
      status: "disconnected",
      icon: "📱",
      category: "comunicacao"
    },
    {
      id: 5,
      name: "Mercado Pago",
      description: "Solução completa de pagamentos",
      status: "pending",
      icon: "🛒",
      category: "pagamento"
    },
    {
      id: 6,
      name: "Mailchimp",
      description: "Email marketing e newsletters",
      status: "connected",
      icon: "✉️",
      category: "marketing"
    },
    {
      id: 7,
      name: "RD Station",
      description: "Marketing automation brasileiro",
      status: "disconnected",
      icon: "🚀",
      category: "marketing"
    },
    {
      id: 8,
      name: "Google Sheets",
      description: "Exportação de dados para planilhas",
      status: "connected",
      icon: "📋",
      category: "dados"
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredIntegrations = integrations.filter(integration => {
    if (filter === 'all') return true;
    return integration.status === filter;
  });

  const toggleIntegration = (id) => {
    setIntegrations(integrations.map(integration =>
      integration.id === id 
        ? { 
            ...integration, 
            status: integration.status === 'connected' ? 'disconnected' : 'connected'
          }
        : integration
    ));
  };

  const getStatusColor = (status) => {
    const colors = {
      connected: '#10b981',
      disconnected: '#ef4444',
      pending: '#f59e0b'
    };
    return colors[status] || '#6b7280';
  };

  const getStatusText = (status) => {
    const texts = {
      connected: 'Conectado',
      disconnected: 'Desconectado',
      pending: 'Pendente'
    };
    return texts[status] || status;
  };

  const connectedCount = integrations.filter(i => i.status === 'connected').length;

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
      
      {/* Header */}
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
            🔌 Integrações
          </h1>
          <p style={{ 
            margin: '6px 0 0 0', 
            color: '#cbd5e1', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Conecte e gerencie suas integrações
          </p>
        </div>
        
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          padding: '12px 20px',
          borderRadius: '10px',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}>
          <span style={{ color: '#10b981', fontSize: '14px', fontWeight: '600' }}>
            ✅ {connectedCount} de {integrations.length} conectadas
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div style={{ padding: '32px' }}>

        {/* Filtros */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ color: '#cbd5e1', fontSize: '14px', fontWeight: '600' }}>Filtrar:</span>
            
            {['all', 'connected', 'disconnected', 'pending'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                style={{
                  background: filter === status 
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)'
                    : 'rgba(255, 255, 255, 0.1)',
                  color: filter === status ? 'white' : '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '14px'
                }}
              >
                {status === 'all' ? '📋 Todas' : 
                 status === 'connected' ? '✅ Conectadas' :
                 status === 'disconnected' ? '❌ Desconectadas' : '⏳ Pendentes'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Integrações */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {filteredIntegrations.map(integration => (
            <div
              key={integration.id}
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    fontSize: '32px',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {integration.icon}
                  </div>
                  <div>
                    <h3 style={{
                      margin: '0 0 4px 0',
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#ffffff'
                    }}>
                      {integration.name}
                    </h3>
                    <p style={{
                      margin: 0,
                      fontSize: '14px',
                      color: '#cbd5e1'
                    }}>
                      {integration.description}
                    </p>
                  </div>
                </div>
                
                <span style={{
                  padding: '6px 12px',
                  background: `rgba(${getStatusColor(integration.status).replace('#', '')}, 0.1)`,
                  border: `1px solid rgba(${getStatusColor(integration.status).replace('#', '')}, 0.3)`,
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: getStatusColor(integration.status),
                  fontWeight: '600'
                }}>
                  {getStatusText(integration.status)}
                </span>
              </div>

              <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
              }}>
                <button 
                  onClick={() => toggleIntegration(integration.id)}
                  style={{
                    background: integration.status === 'connected' 
                      ? 'rgba(239, 68, 68, 0.1)'
                      : integration.status === 'pending'
                      ? 'rgba(245, 158, 11, 0.1)'
                      : 'linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.8) 100%)',
                    color: integration.status === 'connected' ? '#fca5a5' : 
                           integration.status === 'pending' ? '#f59e0b' : 'white',
                    border: integration.status === 'connected' 
                      ? '1px solid rgba(239, 68, 68, 0.3)'
                      : integration.status === 'pending'
                      ? '1px solid rgba(245, 158, 11, 0.3)'
                      : 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    flex: '1'
                  }}
                >
                  {integration.status === 'connected' ? '❌ Desconectar' : 
                   integration.status === 'pending' ? '⏳ Configurar' : '🔗 Conectar'}
                </button>
                
                <button style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#3b82f6',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  ⚙️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        div[style*="background: linear-gradient(135deg, rgba(30, 41, 59, 0.8)"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}