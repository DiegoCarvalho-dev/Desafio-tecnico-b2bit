import React, { useState } from "react";

export default function Support() {
  const [activeTab, setActiveTab] = useState('faq');
  const [ticketStatus, setTicketStatus] = useState('');
  const [ticketId, setTicketId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('technical');
  const [priority, setPriority] = useState('medium');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [faqItems] = useState([
    {
      id: 1,
      question: "Como resetar minha senha?",
      answer: "Vá para a página de login, clique em 'Esqueci minha senha' e siga as instruções enviadas para seu email.",
      category: "conta"
    },
    {
      id: 2,
      question: "Como exportar relatórios?",
      answer: "Na página de Relatórios, clique no botão 'Exportar Tudo' ou use os botões individuais de cada relatório para gerar PDFs.",
      category: "relatorios"
    },
    {
      id: 3,
      question: "O sistema está lento, o que fazer?",
      answer: "Recomendamos limpar o cache nas Configurações. Se o problema persistir, entre em contato com nosso suporte.",
      category: "tecnico"
    },
    {
      id: 4,
      question: "Como adicionar novos usuários?",
      answer: "Acesse a página 'Equipe' e use o botão 'Adicionar Membro'. Você precisa ter permissões de administrador.",
      category: "usuarios"
    },
    {
      id: 5,
      question: "Quais métodos de pagamento são aceitos?",
      answer: "Aceitamos cartão de crédito, PIX e boleto bancário. Todos os pagamentos são processados com segurança.",
      category: "pagamento"
    },
    {
      id: 6,
      question: "Como configurar integrações?",
      answer: "Vá para a página 'Integrações' e siga o passo a passo para conectar com os sistemas desejados.",
      category: "integracoes"
    }
  ]);

  const [knowledgeBase] = useState([
    {
      id: 1,
      title: "Guia de Primeiros Passos",
      description: "Aprenda a configurar sua conta e começar a usar o B2Bit",
      category: "iniciante",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Melhores Práticas de Vendas",
      description: "Dicas para maximizar suas vendas usando nossas ferramentas",
      category: "vendas",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "Solução de Problemas Comuns",
      description: "Resolução para os problemas mais frequentes dos usuários",
      category: "tecnico",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "API e Integrações",
      description: "Documentação completa da nossa API e como integrar",
      category: "desenvolvimento",
      readTime: "15 min"
    }
  ]);

  const [tickets] = useState([
    {
      id: "TKT-001",
      subject: "Problema com login",
      status: "resolvido",
      priority: "alta",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-16"
    },
    {
      id: "TKT-002",
      subject: "Dúvida sobre relatórios",
      status: "em_andamento",
      priority: "media",
      createdAt: "2024-01-18",
      updatedAt: "2024-01-18"
    },
    {
      id: "TKT-003",
      subject: "Sugestão de melhoria",
      status: "aberto",
      priority: "baixa",
      createdAt: "2024-01-20",
      updatedAt: "2024-01-20"
    }
  ]);

  const handleSubmitTicket = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
 
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('✅ Ticket enviado com sucesso! Entraremos em contato em breve.');
    setMessage('');
    setSubject('');
    setCategory('technical');
    setPriority('medium');
    setIsSubmitting(false);
    setActiveTab('my_tickets');
  };

  const handleCheckTicket = () => {
    if (!ticketId.trim()) {
      alert('Por favor, insira o ID do ticket.');
      return;
    }
    
    const ticket = tickets.find(t => t.id === ticketId.toUpperCase());
    if (ticket) {
      setTicketStatus(`Ticket ${ticket.id}: ${ticket.status} - Prioridade ${ticket.priority}`);
    } else {
      setTicketStatus('Ticket não encontrado. Verifique o ID e tente novamente.');
    }
  };

  const filteredFaqs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status) => {
    const colors = {
      aberto: '#3b82f6',
      em_andamento: '#f59e0b',
      resolvido: '#10b981',
      fechado: '#6b7280'
    };
    return colors[status] || '#6b7280';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      alta: '#ef4444',
      media: '#f59e0b',
      baixa: '#10b981'
    };
    return colors[priority] || '#6b7280';
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
            🛟 Suporte
          </h1>
          <p style={{ 
            margin: '6px 0 0 0', 
            color: '#cbd5e1', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Estamos aqui para ajudar você
          </p>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <span style={{ color: '#cbd5e1', fontSize: '14px' }}>📞</span>
            <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600', marginLeft: '8px' }}>
              (84) 99418-2380
            </span>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <span style={{ color: '#cbd5e1', fontSize: '14px' }}>✉️</span>
            <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600', marginLeft: '8px' }}>
              suporte@b2bit.com
            </span>
          </div>
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
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { id: 'faq', label: '❓ FAQ', icon: '❓' },
              { id: 'knowledge', label: '📚 Base de Conhecimento', icon: '📚' },
              { id: 'new_ticket', label: '🎫 Novo Ticket', icon: '🎫' },
              { id: 'my_tickets', label: '📋 Meus Tickets', icon: '📋' },
              { id: 'status', label: '🔍 Verificar Ticket', icon: '🔍' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id 
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)'
                    : 'rgba(255, 255, 255, 0.1)',
                  color: activeTab === tab.id ? 'white' : '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          minHeight: '400px'
        }}>

          {activeTab === 'faq' && (
            <div>
              <h2 style={{ 
                margin: '0 0 24px 0', 
                fontSize: '24px', 
                fontWeight: '700',
                color: '#ffffff'
              }}>
                ❓ Perguntas Frequentes
              </h2>
              
              <div style={{ marginBottom: '24px' }}>
                <input
                  type="text"
                  placeholder="🔍 Pesquisar nas FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                {filteredFaqs.map(faq => (
                  <div
                    key={faq.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '20px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <h3 style={{
                      margin: '0 0 12px 0',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#ffffff'
                    }}>
                      {faq.question}
                    </h3>
                    <p style={{
                      margin: 0,
                      fontSize: '14px',
                      color: '#cbd5e1',
                      lineHeight: '1.5'
                    }}>
                      {faq.answer}
                    </p>
                    <div style={{
                      marginTop: '12px',
                      padding: '4px 12px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: '#cbd5e1',
                      display: 'inline-block'
                    }}>
                      {faq.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'knowledge' && (
            <div>
              <h2 style={{ 
                margin: '0 0 24px 0', 
                fontSize: '24px', 
                fontWeight: '700',
                color: '#ffffff'
              }}>
                📚 Base de Conhecimento
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {knowledgeBase.map(article => (
                  <div
                    key={article.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '20px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <h3 style={{
                      margin: '0 0 12px 0',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#ffffff'
                    }}>
                      {article.title}
                    </h3>
                    <p style={{
                      margin: '0 0 16px 0',
                      fontSize: '14px',
                      color: '#cbd5e1',
                      lineHeight: '1.5'
                    }}>
                      {article.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        padding: '4px 12px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        borderRadius: '6px',
                        fontSize: '12px',
                        color: '#10b981'
                      }}>
                        {article.category}
                      </span>
                      <span style={{
                        fontSize: '12px',
                        color: '#94a3b8'
                      }}>
                        ⏱️ {article.readTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'new_ticket' && (
            <div>
              <h2 style={{ 
                margin: '0 0 24px 0', 
                fontSize: '24px', 
                fontWeight: '700',
                color: '#ffffff'
              }}>
                🎫 Abrir Novo Ticket de Suporte
              </h2>
              
              <form onSubmit={handleSubmitTicket}>
                <div style={{
                  display: 'grid',
                  gap: '20px',
                  maxWidth: '600px'
                }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      fontSize: '14px', 
                      fontWeight: '600',
                      color: '#cbd5e1'
                    }}>
                      Assunto
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
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
                      placeholder="Descreva brevemente o problema..."
                    />
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px'
                  }}>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        fontSize: '14px', 
                        fontWeight: '600',
                        color: '#cbd5e1'
                      }}>
                        Categoria
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          color: '#ffffff',
                          fontSize: '14px',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="technical" style={{ background: '#1e293b', color: '#ffffff' }}>Problema Técnico</option>
                        <option value="billing" style={{ background: '#1e293b', color: '#ffffff' }}>Cobrança</option>
                        <option value="feature" style={{ background: '#1e293b', color: '#ffffff' }}>Sugestão de Melhoria</option>
                        <option value="account" style={{ background: '#1e293b', color: '#ffffff' }}>Conta e Acesso</option>
                        <option value="other" style={{ background: '#1e293b', color: '#ffffff' }}>Outro</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        fontSize: '14px', 
                        fontWeight: '600',
                        color: '#cbd5e1'
                      }}>
                        Prioridade
                      </label>
                      <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          color: '#ffffff',
                          fontSize: '14px',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="low" style={{ background: '#1e293b', color: '#ffffff' }}>Baixa</option>
                        <option value="medium" style={{ background: '#1e293b', color: '#ffffff' }}>Média</option>
                        <option value="high" style={{ background: '#1e293b', color: '#ffffff' }}>Alta</option>
                        <option value="urgent" style={{ background: '#1e293b', color: '#ffffff' }}>Urgente</option>
                      </select>
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
                      Descrição Detalhada
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows="6"
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
                        fontFamily: 'inherit'
                      }}
                      placeholder="Descreva seu problema ou dúvida em detalhes..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: isSubmitting
                        ? 'linear-gradient(135deg, rgba(100, 116, 139, 0.8) 0%, rgba(71, 85, 105, 0.8) 100%)'
                        : 'linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.8) 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '14px 28px',
                      borderRadius: '10px',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '16px',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    {isSubmitting ? '⏳ Enviando...' : '🚀 Enviar Ticket'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'my_tickets' && (
            <div>
              <h2 style={{ 
                margin: '0 0 24px 0', 
                fontSize: '24px', 
                fontWeight: '700',
                color: '#ffffff'
              }}>
                📋 Meus Tickets de Suporte
              </h2>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                {tickets.map(ticket => (
                  <div
                    key={ticket.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '20px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '12px'
                    }}>
                      <div>
                        <h3 style={{
                          margin: '0 0 8px 0',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#ffffff'
                        }}>
                          {ticket.subject}
                        </h3>
                        <p style={{
                          margin: 0,
                          fontSize: '14px',
                          color: '#cbd5e1'
                        }}>
                          ID: {ticket.id} • Criado em: {ticket.createdAt}
                        </p>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          padding: '6px 12px',
                          background: `rgba(${getStatusColor(ticket.status).replace('#', '')}, 0.1)`,
                          border: `1px solid rgba(${getStatusColor(ticket.status).replace('#', '')}, 0.3)`,
                          borderRadius: '6px',
                          fontSize: '12px',
                          color: getStatusColor(ticket.status),
                          fontWeight: '600'
                        }}>
                          {ticket.status}
                        </span>
                        
                        <span style={{
                          padding: '6px 12px',
                          background: `rgba(${getPriorityColor(ticket.priority).replace('#', '')}, 0.1)`,
                          border: `1px solid rgba(${getPriorityColor(ticket.priority).replace('#', '')}, 0.3)`,
                          borderRadius: '6px',
                          fontSize: '12px',
                          color: getPriorityColor(ticket.priority),
                          fontWeight: '600'
                        }}>
                          {ticket.priority}
                        </span>
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'center'
                    }}>
                      <button style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: '#3b82f6',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}>
                        👀 Ver Detalhes
                      </button>
                      
                      <button style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        color: '#fca5a5',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}>
                        🗑️ Excluir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'status' && (
            <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
              <h2 style={{ 
                margin: '0 0 24px 0', 
                fontSize: '24px', 
                fontWeight: '700',
                color: '#ffffff'
              }}>
                🔍 Verificar Status do Ticket
              </h2>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '32px',
                marginBottom: '24px'
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="text"
                    placeholder="Digite o ID do ticket (ex: TKT-001)"
                    value={ticketId}
                    onChange={(e) => setTicketId(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      textAlign: 'center'
                    }}
                  />
                </div>
                
                <button
                  onClick={handleCheckTicket}
                  style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '14px'
                  }}
                >
                  🔍 Verificar Status
                </button>
                
                {ticketStatus && (
                  <div style={{
                    marginTop: '20px',
                    padding: '16px',
                    background: ticketStatus.includes('não encontrado') 
                      ? 'rgba(239, 68, 68, 0.1)'
                      : 'rgba(16, 185, 129, 0.1)',
                    border: ticketStatus.includes('não encontrado')
                      ? '1px solid rgba(239, 68, 68, 0.3)'
                      : '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '8px',
                    color: ticketStatus.includes('não encontrado') ? '#fca5a5' : '#10b981',
                    fontSize: '14px'
                  }}>
                    {ticketStatus}
                  </div>
                )}
              </div>
              
              <p style={{ 
                margin: 0, 
                fontSize: '14px',
                color: '#94a3b8'
              }}>
                💡 Dica: O ID do ticket foi enviado para seu email quando você abriu o chamado.
              </p>
            </div>
          )}

        </div>

      </div>

      <style>{`
        /* Efeito hover para botões principais */
        button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        /* Efeito hover para cards */
        div[style*="background: linear-gradient(135deg, rgba(30, 41, 59, 0.8)"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        /* Efeito hover para itens interativos */
        div[style*="background: rgba(255, 255, 255, 0.05)"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        /* Efeito hover para inputs */
        input:hover, select:hover, textarea:hover {
          border-color: rgba(99, 102, 241, 0.5) !important;
        }

        input:focus, select:focus, textarea:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        /* Estilização dos selects para ficarem visíveis */
        select option {
          background: #1e293b !important;
          color: #ffffff !important;
        }

        select:focus option {
          background: #1e293b !important;
          color: #ffffff !important;
        }
      `}</style>
    </div>
  );
}