import React, { useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Venda Concluída',
      message: 'Sua venda no valor de R$ 2.500,00 foi processada com sucesso',
      time: 'Há 5 minutos',
      read: false,
      icon: '✅'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Pagamento Pendente',
      message: 'Cliente João Silva possui um pagamento em atraso',
      time: 'Há 1 hora',
      read: false,
      icon: '⚠️'
    },
    {
      id: 3,
      type: 'info',
      title: 'Novo Lead',
      message: 'Maria Santos se interessou pelo produto Premium',
      time: 'Há 2 horas',
      read: true,
      icon: '📥'
    },
    {
      id: 4,
      type: 'error',
      title: 'Falha na Integração',
      message: 'Erro na sincronização com o sistema de pagamento',
      time: 'Há 6 horas',
      read: true,
      icon: '❌'
    },
    {
      id: 5,
      type: 'success',
      title: 'Meta Batida',
      message: 'Parabéns! Você atingiu 120% da meta deste mês',
      time: 'Há 1 dia',
      read: true,
      icon: '🎯'
    },
    {
      id: 6,
      type: 'info',
      title: 'Atualização do Sistema',
      message: 'Nova versão 2.1.0 disponível com melhorias de performance',
      time: 'Há 2 dias',
      read: true,
      icon: '🔄'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.read;
    if (filter === 'read') return notification.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const getTypeColor = (type) => {
    const colors = {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6'
    };
    return colors[type] || '#6b7280';
  };

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
            🔔 Notificações
          </h1>
          <p style={{ 
            margin: '6px 0 0 0', 
            color: '#cbd5e1', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            {unreadCount > 0 
              ? `${unreadCount} notificação${unreadCount > 1 ? 'es' : ''} não lida${unreadCount > 1 ? 's' : ''}`
              : 'Todas as notificações foram lidas'
            }
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          {unreadCount > 0 && (
            <button 
              onClick={markAllAsRead}
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
              📭 Marcar Todas como Lidas
            </button>
          )}
          
          {notifications.length > 0 && (
            <button 
              onClick={clearAll}
              style={{
                background: 'rgba(239, 68, 68, 0.2)',
                color: '#fca5a5',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                padding: '10px 20px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
            >
              🗑️ Limpar Todas
            </button>
          )}
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
              Todas ({notifications.length})
            </button>
            
            <button
              onClick={() => setFilter('unread')}
              style={{
                background: filter === 'unread' 
                  ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(220, 38, 38, 0.8) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: filter === 'unread' ? 'white' : '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
            >
              Não Lidas ({unreadCount})
            </button>
            
            <button
              onClick={() => setFilter('read')}
              style={{
                background: filter === 'read' 
                  ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.8) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: filter === 'read' ? 'white' : '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
            >
              Lidas ({notifications.length - unreadCount})
            </button>
          </div>
        </div>

        {/* Lista de Notificações */}
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
            margin: '0 0 24px 0', 
            fontSize: '20px', 
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#ffffff'
          }}>
            <span style={{ fontSize: '24px' }}>📋</span>
            Suas Notificações
          </h2>

          {filteredNotifications.length === 0 ? (
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
                Nenhuma notificação
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: '14px',
                color: '#94a3b8'
              }}>
                {filter === 'all' 
                  ? 'Você não tem nenhuma notificação no momento.'
                  : filter === 'unread'
                  ? 'Todas as notificações foram lidas.'
                  : 'Nenhuma notificação lida encontrada.'
                }
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
              {filteredNotifications.map(notification => (
                <div
                  key={notification.id}
                  style={{
                    background: notification.read 
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
                    border: notification.read
                      ? '1px solid rgba(255, 255, 255, 0.1)'
                      : '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '12px',
                    padding: '20px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    borderLeft: `4px solid ${getTypeColor(notification.type)}`
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{
                      fontSize: '24px',
                      flexShrink: 0
                    }}>
                      {notification.icon}
                    </div>

                    {/* Conteúdo */}
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
                          {notification.title}
                        </h3>
                        <span style={{
                          fontSize: '12px',
                          color: '#94a3b8',
                          flexShrink: 0,
                          marginLeft: '12px'
                        }}>
                          {notification.time}
                        </span>
                      </div>

                      <p style={{
                        margin: '0 0 12px 0',
                        fontSize: '14px',
                        color: '#cbd5e1',
                        lineHeight: '1.5'
                      }}>
                        {notification.message}
                      </p>

                      <div style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'center'
                      }}>
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            style={{
                              background: 'rgba(16, 185, 129, 0.1)',
                              color: '#10b981',
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                              padding: '6px 12px',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            ✅ Marcar como Lida
                          </button>
                        )}
                        
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            color: '#fca5a5',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          🗑️ Excluir
                        </button>
                      </div>
                    </div>
                  </div>

                  {!notification.read && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '8px',
                      height: '8px',
                      background: '#3b82f6',
                      borderRadius: '50%'
                    }} />
                  )}
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
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📨</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Total</h3>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#ffffff' }}>
              {notifications.length}
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔔</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Não Lidas</h3>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#3b82f6' }}>
              {unreadCount}
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>✅</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Lidas</h3>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#10b981' }}>
              {notifications.length - unreadCount}
            </p>
          </div>
        </div>

      </div>

      <style>{`
        /* Efeito hover para botões principais */
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        /* Efeito hover para cards */
        div[style*="background: linear-gradient(135deg, rgba(30, 41, 59, 0.8)"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        /* Efeito hover para notificações */
        div[style*="background: rgba(255, 255, 255, 0.05)"]:hover,
        div[style*="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1)"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
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