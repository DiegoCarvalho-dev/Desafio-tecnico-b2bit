import React, { useState, useEffect } from "react";

export default function Activity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setActivities([
        {
          id: 1,
          user: "Diego Carvalho",
          action: "login",
          description: "Fez login no sistema",
          timestamp: "2024-01-28T10:30:00",
          icon: "🔐",
          type: "system",
          details: "Login realizado com sucesso às 10:30h"
        },
        {
          id: 2,
          user: "Maria Silva",
          action: "sale", 
          description: "Realizou nova venda - R$ 2.500,00",
          timestamp: "2024-01-28T09:15:00",
          icon: "💰",
          type: "sale",
          details: "Venda para cliente João Silva - Produto: Plano Premium"
        },
        {
          id: 3,
          user: "Carlos Santos",
          action: "update",
          description: "Atualizou configurações do sistema",
          timestamp: "2024-01-27T16:45:00", 
          icon: "⚙️",
          type: "system",
          details: "Configurações de notificação atualizadas"
        },
        {
          id: 4,
          user: "Ana Oliveira",
          action: "create",
          description: "Criou novo relatório de vendas",
          timestamp: "2024-01-27T14:20:00",
          icon: "📊",
          type: "report",
          details: "Relatório mensal de desempenho criado"
        },
        {
          id: 5,
          user: "Roberto Lima",
          action: "upload",
          description: "Upload de arquivos de marketing",
          timestamp: "2024-01-27T11:30:00",
          icon: "📁",
          type: "file",
          details: "5 arquivos de campanha publicitária"
        },
        {
          id: 6,
          user: "Juliana Costa",
          action: "meeting",
          description: "Reunião com equipe de desenvolvimento",
          timestamp: "2024-01-26T15:00:00",
          icon: "👥",
          type: "meeting",
          details: "Reunião de planejamento do sprint"
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return 'Agora mesmo';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}min atrás`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h atrás`;
    return date.toLocaleDateString('pt-BR');
  };

  const getTypeColor = (type) => {
    const colors = {
      system: '#3b82f6',
      sale: '#10b981',
      report: '#8b5cf6',
      file: '#f59e0b',
      meeting: '#ec4899'
    };
    return colors[type] || '#6b7280';
  };

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(activity => activity.type === filter);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('✅ Atividades atualizadas com sucesso!');
    }, 1000);
  };

  const handleViewDetails = (activity) => {
    setSelectedActivity(activity);
  };

  const handleExportActivities = () => {
    alert('📊 Exportando relatório de atividades...');
    setTimeout(() => {
      alert('✅ Relatório exportado com sucesso!');
    }, 1500);
  };

  const handleClearActivities = () => {
    if (window.confirm('Tem certeza que deseja limpar todas as atividades? Esta ação não pode ser desfeita.')) {
      setActivities([]);
      alert('🗑️ Todas as atividades foram limpas!');
    }
  };

  if (loading) {
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
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          fontSize: '18px',
          color: '#cbd5e1'
        }}>
          Carregando atividades...
        </div>
      </div>
    );
  }

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
            📋 Atividades
          </h1>
          <p style={{ 
            margin: '6px 0 0 0', 
            color: '#cbd5e1', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Acompanhe as atividades recentes do sistema
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={handleExportActivities}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '10px 20px',
              borderRadius: '10px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '14px'
            }}
          >
            📊 Exportar
          </button>
          <button 
            onClick={handleRefresh}
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.8) 100%)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            🔄 Atualizar
          </button>
        </div>
      </div>

      <div style={{
        padding: '32px',
        position: 'relative',
        zIndex: '1'
      }}>

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
            
            <button
              onClick={() => setFilter('all')}
              style={{
                background: filter === 'all' 
                  ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: filter === 'all' ? 'white' : '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
            >
              Todas ({activities.length})
            </button>
            
            <button
              onClick={() => setFilter('system')}
              style={{
                background: filter === 'system' 
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.8) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: filter === 'system' ? 'white' : '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
            >
              Sistema ({activities.filter(a => a.type === 'system').length})
            </button>
            
            <button
              onClick={() => setFilter('sale')}
              style={{
                background: filter === 'sale' 
                  ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.8) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: filter === 'sale' ? 'white' : '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
            >
              Vendas ({activities.filter(a => a.type === 'sale').length})
            </button>

            {activities.length > 0 && (
              <button
                onClick={handleClearActivities}
                style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#fca5a5',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '14px',
                  marginLeft: 'auto'
                }}
              >
                🗑️ Limpar Tudo
              </button>
            )}
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}>
          <h2 style={{ 
            margin: '0 0 24px 0', 
            fontSize: '20px', 
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#ffffff'
          }}>
            <span style={{ fontSize: '24px' }}>📝</span>
            Log de Atividades
          </h2>

          {filteredActivities.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#94a3b8'
            }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>📭</div>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '18px', 
                color: '#cbd5e1',
                fontWeight: '600'
              }}>
                Nenhuma atividade
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: '14px',
                color: '#94a3b8'
              }}>
                Não há atividades para exibir com o filtro selecionado.
              </p>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxHeight: '600px',
              overflowY: 'auto'
            }}>
              {filteredActivities.map(activity => (
                <div
                  key={activity.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '20px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    borderLeft: `4px solid ${getTypeColor(activity.type)}`
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{
                      fontSize: '20px',
                      flexShrink: 0,
                      background: `${getTypeColor(activity.type)}20`,
                      borderRadius: '8px',
                      padding: '8px',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {activity.icon}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '8px'
                      }}>
                        <h3 style={{
                          margin: 0,
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#ffffff'
                        }}>
                          {activity.user}
                        </h3>
                        <span style={{
                          fontSize: '12px',
                          color: '#94a3b8',
                          flexShrink: 0,
                          marginLeft: '12px'
                        }}>
                          {formatTime(activity.timestamp)}
                        </span>
                      </div>

                      <p style={{
                        margin: '0 0 12px 0',
                        fontSize: '14px',
                        color: '#cbd5e1',
                        lineHeight: '1.5'
                      }}>
                        {activity.description}
                      </p>

                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          background: `${getTypeColor(activity.type)}20`,
                          color: getTypeColor(activity.type),
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>
                          {activity.type === 'system' && 'Sistema'}
                          {activity.type === 'sale' && 'Venda'}
                          {activity.type === 'report' && 'Relatório'}
                          {activity.type === 'file' && 'Arquivo'}
                          {activity.type === 'meeting' && 'Reunião'}
                        </span>

                        <button
                          onClick={() => handleViewDetails(activity)}
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#cbd5e1',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          👀 Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '24px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📊</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Total</h3>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#ffffff' }}>
              {activities.length}
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>👥</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Usuários Únicos</h3>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#3b82f6' }}>
              {new Set(activities.map(a => a.user)).size}
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>💰</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Vendas Hoje</h3>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#10b981' }}>
              {activities.filter(a => a.type === 'sale').length}
            </p>
          </div>
        </div>

      </div>

      {/* Modal de Detalhes */}
      {selectedActivity && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '1000',
          padding: '20px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(20px)',
            maxWidth: '500px',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <h2 style={{ 
                margin: 0, 
                fontSize: '24px', 
                fontWeight: '700',
                color: '#ffffff'
              }}>
                📋 Detalhes da Atividade
              </h2>
              <button 
                onClick={() => setSelectedActivity(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '18px'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px'
            }}>
              <div style={{
                fontSize: '32px',
                background: `${getTypeColor(selectedActivity.type)}20`,
                borderRadius: '12px',
                padding: '12px',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {selectedActivity.icon}
              </div>
              <div>
                <h3 style={{ 
                  margin: '0 0 4px 0', 
                  fontSize: '18px', 
                  fontWeight: '600',
                  color: '#ffffff'
                }}>
                  {selectedActivity.user}
                </h3>
                <p style={{ 
                  margin: 0, 
                  fontSize: '14px',
                  color: '#cbd5e1'
                }}>
                  {new Date(selectedActivity.timestamp).toLocaleString('pt-BR')}
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h4 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '14px', 
                color: '#cbd5e1',
                fontWeight: '600'
              }}>
                Descrição
              </h4>
              <p style={{ 
                margin: 0, 
                fontSize: '14px',
                color: '#ffffff',
                lineHeight: '1.5'
              }}>
                {selectedActivity.description}
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h4 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '14px', 
                color: '#cbd5e1',
                fontWeight: '600'
              }}>
                Detalhes Adicionais
              </h4>
              <p style={{ 
                margin: 0, 
                fontSize: '14px',
                color: '#cbd5e1',
                lineHeight: '1.5'
              }}>
                {selectedActivity.details}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Efeito hover para botões principais */
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        /* Efeito hover para atividades */
        div[style*="background: rgba(255, 255, 255, 0.05)"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* Efeito hover para cards de estatísticas */
        div[style*="background: linear-gradient(135deg, rgba(30, 41, 59, 0.8)"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        /* Scrollbar personalizada */
        div[style*="overflowY: auto"]::-webkit-scrollbar {
          width: 6px;
        }

        div[style*="overflowY: auto"]::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        div[style*="overflowY: auto"]::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }

        div[style*="overflowY: auto"]::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}