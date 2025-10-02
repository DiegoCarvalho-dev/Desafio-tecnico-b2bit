import React, { useState, useEffect } from "react";

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showNewEventModal, setShowNewEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    type: "meeting",
    description: "",
    participants: ""
  });
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          title: "Reunião de Equipe",
          date: "2024-01-25",
          time: "10:00",
          type: "meeting",
          participants: ["Diego", "Maria", "Carlos", "Ana"],
          description: "Reunião semanal para alinhamento de metas",
          location: "Sala de Reuniões A",
          duration: "1h"
        },
        {
          id: 2,
          title: "Entrega de Relatório",
          date: "2024-01-26",
          time: "15:00", 
          type: "deadline",
          participants: ["Ana"],
          description: "Entrega do relatório trimestral de vendas",
          location: "Online",
          duration: "-"
        },
        {
          id: 3,
          title: "Apresentação para Cliente",
          date: "2024-01-28",
          time: "14:00",
          type: "presentation",
          participants: ["Diego", "Maria", "Carlos"],
          description: "Apresentação do novo produto para cliente importante",
          location: "Sala de Conferências",
          duration: "2h"
        },
        {
          id: 4,
          title: "Treinamento da Equipe",
          date: "2024-01-29",
          time: "09:00",
          type: "training",
          participants: ["Todos"],
          description: "Treinamento sobre novas funcionalidades do sistema",
          location: "Auditório",
          duration: "3h"
        },
        {
          id: 5,
          title: "Revisão de Projeto",
          date: "2024-01-30",
          time: "11:00",
          type: "review",
          participants: ["Carlos", "Roberto"],
          description: "Revisão do projeto de desenvolvimento",
          location: "Sala de Reuniões B",
          duration: "1h30"
        },
        {
          id: 6,
          title: "Evento de Networking",
          date: "2024-02-01",
          time: "18:00",
          type: "networking",
          participants: ["Diego", "Juliana"],
          description: "Evento de networking com parceiros de negócio",
          location: "Hotel Premium",
          duration: "4h"
        },
        {
          id: 7,
          title: "Planejamento Mensal",
          date: "2024-02-02",
          time: "13:00",
          type: "planning",
          participants: ["Todos os Gerentes"],
          description: "Planejamento estratégico para o próximo mês",
          location: "Sala de Diretoria",
          duration: "2h"
        },
        {
          id: 8,
          title: "Manutenção do Sistema",
          date: "2024-02-03",
          time: "22:00",
          type: "maintenance",
          participants: ["Equipe TI"],
          description: "Manutenção programada do sistema principal",
          location: "Data Center",
          duration: "6h"
        },
        {
          id: 9,
          title: "Workshop de Vendas",
          date: "2024-02-05",
          time: "08:30",
          type: "workshop",
          participants: ["Equipe Comercial"],
          description: "Workshop de técnicas avançadas de vendas",
          location: "Centro de Treinamento",
          duration: "8h"
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getEventColor = (type) => {
    switch (type) {
      case 'meeting': return '#3b82f6';
      case 'deadline': return '#f59e0b';
      case 'presentation': return '#8b5cf6';
      case 'training': return '#10b981';
      case 'review': return '#ec4899';
      case 'networking': return '#f97316';
      case 'planning': return '#06b6d4';
      case 'maintenance': return '#6b7280';
      case 'workshop': return '#84cc16';
      default: return '#6b7280';
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'meeting': return '👥';
      case 'deadline': return '⏰';
      case 'presentation': return '🎤';
      case 'training': return '📚';
      case 'review': return '🔍';
      case 'networking': return '🤝';
      case 'planning': return '📋';
      case 'maintenance': return '🔧';
      case 'workshop': return '💡';
      default: return '📅';
    }
  };

  const getEventTypeText = (type) => {
    switch (type) {
      case 'meeting': return 'Reunião';
      case 'deadline': return 'Prazo';
      case 'presentation': return 'Apresentação';
      case 'training': return 'Treinamento';
      case 'review': return 'Revisão';
      case 'networking': return 'Networking';
      case 'planning': return 'Planejamento';
      case 'maintenance': return 'Manutenção';
      case 'workshop': return 'Workshop';
      default: return 'Evento';
    }
  };

  const handleViewEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleEditEvent = (event) => {
    alert(`✏️ Editando evento: ${event.title}\nData: ${event.date} às ${event.time}`);
  };

  const handleDeleteEvent = (event) => {
    if (window.confirm(`Tem certeza que deseja excluir o evento "${event.title}"?`)) {
      setEvents(events.filter(e => e.id !== event.id));
      alert(`🗑️ Evento "${event.title}" excluído com sucesso!`);
    }
  };

  const handleNewEvent = () => {
    setShowNewEventModal(true);
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const event = {
      id: events.length + 1,
      title: newEvent.title,
      date: newEvent.date,
      time: newEvent.time,
      type: newEvent.type,
      description: newEvent.description || "Sem descrição",
      participants: newEvent.participants ? newEvent.participants.split(',') : [],
      location: "A definir",
      duration: "1h"
    };

    setEvents([...events, event]);
    setShowNewEventModal(false);
    setNewEvent({
      title: "",
      date: "",
      time: "",
      type: "meeting",
      description: "",
      participants: ""
    });
    
    alert(`✅ Evento "${event.title}" criado com sucesso!`);
  };

  const handleInputChange = (field, value) => {
    setNewEvent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleShareEvent = (event) => {
    alert(`🔗 Compartilhando evento: ${event.title}\nLink de convite gerado!`);
  };

  const handleRemindEvent = (event) => {
    alert(`⏰ Lembrete definido para: ${event.title}\nVocê será notificado 30 minutos antes.`);
  };

  const getEventsForToday = () => {
    const today = new Date().toISOString().split('T')[0];
    return events.filter(event => event.date === today);
  };

  const getUpcomingEvents = () => {
    const today = new Date().toISOString().split('T')[0];
    return events.filter(event => event.date >= today).slice(0, 5);
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
          Carregando calendário...
        </div>
      </div>
    );
  }

  const todayEvents = getEventsForToday();
  const upcomingEvents = getUpcomingEvents();

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
            📅 Calendário
          </h1>
          <p style={{ 
            margin: '6px 0 0 0', 
            color: '#cbd5e1', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Gerencie seus eventos e compromissos
          </p>
        </div>
        
        <button 
          onClick={handleNewEvent}
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
          ➕ Novo Evento
        </button>
      </div>

      <div style={{
        padding: '32px',
        position: 'relative',
        zIndex: '1'
      }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📅</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Total de Eventos</h3>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#ffffff' }}>
              {events.length}
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎯</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Hoje</h3>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>
              {todayEvents.length}
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🚀</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Próximos</h3>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>
              {upcomingEvents.length}
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '32px',
          alignItems: 'start'
        }}>

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
              <span style={{ fontSize: '24px' }}>🗓️</span>
              Todos os Eventos
            </h2>

            {events.length === 0 ? (
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
                  Nenhum evento
                </h3>
                <p style={{ 
                  margin: 0, 
                  fontSize: '14px',
                  color: '#94a3b8'
                }}>
                  Você não tem nenhum evento agendado.
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
                {events.map(event => (
                  <div
                    key={event.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '20px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      borderLeft: `4px solid ${getEventColor(event.type)}`
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px'
                    }}>
                      <div style={{
                        fontSize: '24px',
                        flexShrink: 0,
                        background: `${getEventColor(event.type)}20`,
                        borderRadius: '8px',
                        padding: '12px',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {getEventIcon(event.type)}
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
                            {event.title}
                          </h3>
                          <span 
                            style={{
                              padding: '4px 8px',
                              background: `${getEventColor(event.type)}20`,
                              color: getEventColor(event.type),
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: '600'
                            }}
                          >
                            {getEventTypeText(event.type)}
                          </span>
                        </div>

                        <p style={{
                          margin: '0 0 12px 0',
                          fontSize: '14px',
                          color: '#cbd5e1',
                          lineHeight: '1.5'
                        }}>
                          {event.description}
                        </p>

                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                          gap: '12px',
                          marginTop: '12px'
                        }}>
                          <div>
                            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Data:</span>
                            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#cbd5e1' }}>
                              {new Date(event.date).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                          <div>
                            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Hora:</span>
                            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#cbd5e1' }}>
                              {event.time}
                            </p>
                          </div>
                          <div>
                            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Duração:</span>
                            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#cbd5e1' }}>
                              {event.duration}
                            </p>
                          </div>
                          <div>
                            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Local:</span>
                            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#cbd5e1' }}>
                              {event.location}
                            </p>
                          </div>
                        </div>

                        <div style={{ marginTop: '12px' }}>
                          <span style={{ fontSize: '12px', color: '#94a3b8' }}>Participantes:</span>
                          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#cbd5e1' }}>
                            {event.participants.join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      flexWrap: 'wrap'
                    }}>
                      <button 
                        onClick={() => handleViewEvent(event)}
                        style={{
                          background: 'rgba(59, 130, 246, 0.1)',
                          color: '#3b82f6',
                          border: '1px solid rgba(59, 130, 246, 0.3)',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        👁️ Detalhes
                      </button>
                      <button 
                        onClick={() => handleEditEvent(event)}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#cbd5e1',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        ✏️ Editar
                      </button>
                      <button 
                        onClick={() => handleShareEvent(event)}
                        style={{
                          background: 'rgba(139, 92, 246, 0.1)',
                          color: '#8b5cf6',
                          border: '1px solid rgba(139, 92, 246, 0.3)',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        🔗 Compartilhar
                      </button>
                      <button 
                        onClick={() => handleRemindEvent(event)}
                        style={{
                          background: 'rgba(245, 158, 11, 0.1)',
                          color: '#f59e0b',
                          border: '1px solid rgba(245, 158, 11, 0.3)',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        ⏰ Lembrete
                      </button>
                      <button 
                        onClick={() => handleDeleteEvent(event)}
                        style={{
                          background: 'rgba(239, 68, 68, 0.1)',
                          color: '#ef4444',
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          padding: '8px 12px',
                          borderRadius: '8px',
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
                ))}
              </div>
            )}
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
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
              <h3 style={{ 
                margin: '0 0 16px 0', 
                fontSize: '18px', 
                fontWeight: '600',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🎯 Eventos de Hoje
              </h3>
              {todayEvents.length === 0 ? (
                <p style={{ margin: 0, fontSize: '14px', color: '#94a3b8', textAlign: 'center' }}>
                  Nenhum evento para hoje
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {todayEvents.map(event => (
                    <div key={event.id} style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px',
                      padding: '12px',
                      borderLeft: `3px solid ${getEventColor(event.type)}`
                    }}>
                      <div style={{ fontSize: '12px', color: getEventColor(event.type), fontWeight: '600' }}>
                        {event.time}
                      </div>
                      <div style={{ fontSize: '14px', color: '#ffffff', fontWeight: '500' }}>
                        {event.title}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ 
                margin: '0 0 16px 0', 
                fontSize: '18px', 
                fontWeight: '600',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🚀 Próximos Eventos
              </h3>
              {upcomingEvents.length === 0 ? (
                <p style={{ margin: 0, fontSize: '14px', color: '#94a3b8', textAlign: 'center' }}>
                  Nenhum evento futuro
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {upcomingEvents.map(event => (
                    <div key={event.id} style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px',
                      padding: '12px'
                    }}>
                      <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                        {new Date(event.date).toLocaleDateString('pt-BR')} • {event.time}
                      </div>
                      <div style={{ fontSize: '14px', color: '#ffffff', fontWeight: '500' }}>
                        {event.title}
                      </div>
                      <div style={{ fontSize: '12px', color: getEventColor(event.type) }}>
                        {getEventTypeText(event.type)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      {showNewEventModal && (
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
                ➕ Novo Evento
              </h2>
              <button 
                onClick={() => setShowNewEventModal(false)}
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#cbd5e1'
                }}>
                  Título do Evento *
                </label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                  placeholder="Digite o título do evento"
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#cbd5e1'
                }}>
                  Data *
                </label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#cbd5e1'
                }}>
                  Hora *
                </label>
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#cbd5e1'
                }}>
                  Tipo de Evento
                </label>
                <div style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  position: 'relative'
                }}>
                  <select
                    value={newEvent.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="meeting" style={{ background: '#1e293b', color: '#ffffff' }}>👥 Reunião</option>
                    <option value="deadline" style={{ background: '#1e293b', color: '#ffffff' }}>⏰ Prazo</option>
                    <option value="presentation" style={{ background: '#1e293b', color: '#ffffff' }}>🎤 Apresentação</option>
                    <option value="training" style={{ background: '#1e293b', color: '#ffffff' }}>📚 Treinamento</option>
                    <option value="review" style={{ background: '#1e293b', color: '#ffffff' }}>🔍 Revisão</option>
                    <option value="networking" style={{ background: '#1e293b', color: '#ffffff' }}>🤝 Networking</option>
                    <option value="planning" style={{ background: '#1e293b', color: '#ffffff' }}>📋 Planejamento</option>
                    <option value="maintenance" style={{ background: '#1e293b', color: '#ffffff' }}>🔧 Manutenção</option>
                    <option value="workshop" style={{ background: '#1e293b', color: '#ffffff' }}>💡 Workshop</option>
                  </select>
                  <div style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#cbd5e1',
                    pointerEvents: 'none'
                  }}>
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#cbd5e1'
                }}>
                  Descrição
                </label>
                <textarea
                  value={newEvent.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '80px'
                  }}
                  placeholder="Descrição do evento"
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  color: '#cbd5e1'
                }}>
                  Participantes
                </label>
                <input
                  type="text"
                  value={newEvent.participants}
                  onChange={(e) => handleInputChange('participants', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                  placeholder="Nomes separados por vírgula"
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button 
                onClick={() => setShowNewEventModal(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  flex: 1
                }}
              >
                Cancelar
              </button>
              <button 
                onClick={handleAddEvent}
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.8) 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  flex: 1
                }}
              >
                💾 Criar Evento
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedEvent && (
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
                📋 Detalhes do Evento
              </h2>
              <button 
                onClick={() => setSelectedEvent(null)}
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
                background: `${getEventColor(selectedEvent.type)}20`,
                borderRadius: '12px',
                padding: '12px',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {getEventIcon(selectedEvent.type)}
              </div>
              <div>
                <h3 style={{ 
                  margin: '0 0 4px 0', 
                  fontSize: '18px', 
                  fontWeight: '600',
                  color: '#ffffff'
                }}>
                  {selectedEvent.title}
                </h3>
                <p style={{ 
                  margin: 0, 
                  fontSize: '14px',
                  color: getEventColor(selectedEvent.type),
                  fontWeight: '600'
                }}>
                  {getEventTypeText(selectedEvent.type)}
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h4 style={{ 
                margin: '0 0 12px 0', 
                fontSize: '14px', 
                color: '#cbd5e1',
                fontWeight: '600'
              }}>
                Informações do Evento
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>Data:</span>
                  <span style={{ fontSize: '14px', color: '#cbd5e1' }}>
                    {new Date(selectedEvent.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>Hora:</span>
                  <span style={{ fontSize: '14px', color: '#cbd5e1' }}>
                    {selectedEvent.time}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>Duração:</span>
                  <span style={{ fontSize: '14px', color: '#cbd5e1' }}>
                    {selectedEvent.duration}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>Local:</span>
                  <span style={{ fontSize: '14px', color: '#cbd5e1' }}>
                    {selectedEvent.location}
                  </span>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px',
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
                color: '#cbd5e1',
                lineHeight: '1.5'
              }}>
                {selectedEvent.description}
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
                Participantes
              </h4>
              <p style={{ 
                margin: 0, 
                fontSize: '14px',
                color: '#cbd5e1',
                lineHeight: '1.5'
              }}>
                {selectedEvent.participants.join(', ')}
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
        
        /* Efeito hover para eventos */
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

        /* Efeito hover para inputs e selects */
        input:hover, textarea:hover, select:hover {
          border-color: rgba(99, 102, 241, 0.5) !important;
        }

        input:focus, textarea:focus, select:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        /* Estilo customizado para o select */
        select option {
          background: #1e293b !important;
          color: #ffffff !important;
        }

        select:focus option {
          background: #334155 !important;
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