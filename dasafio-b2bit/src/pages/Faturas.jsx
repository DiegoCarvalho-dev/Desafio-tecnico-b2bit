import React, { useState, useEffect } from "react";

export default function Faturas() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showNewInvoiceModal, setShowNewInvoiceModal] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    cliente: "",
    valor: "",
    vencimento: "",
    descricao: ""
  });

  useEffect(() => {
    setTimeout(() => {
      setInvoices([
        {
          id: 1,
          numero: "INV-2024-001",
          cliente: "Empresa ABC Ltda",
          valor: 12500.00,
          vencimento: "2024-02-10",
          emissao: "2024-01-25",
          status: "paga",
          descricao: "Serviços de consultoria Q1",
          metodoPagamento: "PIX"
        },
        {
          id: 2,
          numero: "INV-2024-002", 
          cliente: "Comércio XYZ S/A",
          valor: 8900.50,
          vencimento: "2024-02-15",
          emissao: "2024-01-26",
          status: "pendente",
          descricao: "Desenvolvimento sistema",
          metodoPagamento: "Boleto"
        },
        {
          id: 3,
          numero: "INV-2024-003",
          cliente: "Serviços Quick",
          valor: 15600.75,
          vencimento: "2024-02-05",
          emissao: "2024-01-20",
          status: "atrasada",
          descricao: "Plano Enterprise anual",
          metodoPagamento: "Cartão"
        },
        {
          id: 4,
          numero: "INV-2024-004",
          cliente: "Tech Solutions",
          valor: 7200.00,
          vencimento: "2024-02-20",
          emissao: "2024-01-28",
          status: "pendente",
          descricao: "Manutenção mensal",
          metodoPagamento: "Transferência"
        },
        {
          id: 5,
          numero: "INV-2024-005",
          cliente: "Global Corp",
          valor: 23400.25,
          vencimento: "2024-01-30",
          emissao: "2024-01-15",
          status: "paga",
          descricao: "Implementação completa",
          metodoPagamento: "PIX"
        },
        {
          id: 6,
          numero: "INV-2024-006",
          cliente: "Startup Inovação",
          valor: 4500.00,
          vencimento: "2024-02-25",
          emissao: "2024-01-29",
          status: "pendente",
          descricao: "Assinatura básica",
          metodoPagamento: "Cartão"
        },
        {
          id: 7,
          numero: "INV-2024-007",
          cliente: "Indústria Forte",
          valor: 18700.80,
          vencimento: "2024-01-28",
          emissao: "2024-01-10",
          status: "atrasada",
          descricao: "Customização sistema",
          metodoPagamento: "Boleto"
        },
        {
          id: 8,
          numero: "INV-2024-008",
          cliente: "Comércio Local",
          valor: 3200.00,
          vencimento: "2024-02-12",
          emissao: "2024-01-27",
          status: "paga",
          descricao: "Consultoria inicial",
          metodoPagamento: "PIX"
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'paga': return '#10b981';
      case 'pendente': return '#f59e0b';
      case 'atrasada': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'paga': return '✅ Paga';
      case 'pendente': return '⏳ Pendente';
      case 'atrasada': return '❌ Atrasada';
      default: return status;
    }
  };

  const filteredInvoices = filter === 'all' 
    ? invoices 
    : invoices.filter(invoice => invoice.status === filter);

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleEditInvoice = (invoice) => {
    alert(`✏️ Editando fatura ${invoice.numero}\nCliente: ${invoice.cliente}\nValor: R$ ${invoice.valor.toLocaleString('pt-BR')}`);
  };

  const handleDownloadInvoice = (invoice) => {
    alert(`📥 Baixando fatura ${invoice.numero}\nPreparando PDF para download...`);
    setTimeout(() => {
      alert(`✅ Fatura ${invoice.numero} baixada com sucesso!`);
    }, 1500);
  };

  const handleSendReminder = (invoice) => {
    alert(`📧 Enviando lembrete para ${invoice.cliente}\nFatura: ${invoice.numero}\nValor: R$ ${invoice.valor.toLocaleString('pt-BR')}`);
  };

  const handleNewInvoice = () => {
    setShowNewInvoiceModal(true);
  };

  const handleAddInvoice = () => {
    if (!newInvoice.cliente || !newInvoice.valor || !newInvoice.vencimento) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const invoice = {
      id: invoices.length + 1,
      numero: `INV-2024-${String(invoices.length + 1).padStart(3, '0')}`,
      cliente: newInvoice.cliente,
      valor: parseFloat(newInvoice.valor),
      vencimento: newInvoice.vencimento,
      emissao: new Date().toISOString().split('T')[0],
      status: 'pendente',
      descricao: newInvoice.descricao || "Sem descrição",
      metodoPagamento: "A definir"
    };

    setInvoices([invoice, ...invoices]);
    setShowNewInvoiceModal(false);
    setNewInvoice({
      cliente: "",
      valor: "",
      vencimento: "",
      descricao: ""
    });
    
    alert(`✅ Fatura ${invoice.numero} criada com sucesso!`);
  };

  const handleInputChange = (field, value) => {
    setNewInvoice(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePayInvoice = (invoice) => {
    if (window.confirm(`Deseja marcar a fatura ${invoice.numero} como PAGA?`)) {
      const updatedInvoices = invoices.map(inv =>
        inv.id === invoice.id ? { ...inv, status: 'paga' } : inv
      );
      setInvoices(updatedInvoices);
      alert(`✅ Fatura ${invoice.numero} marcada como PAGA!`);
    }
  };

  const totalRecebido = invoices.filter(i => i.status === 'paga').reduce((sum, inv) => sum + inv.valor, 0);
  const totalPendente = invoices.filter(i => i.status === 'pendente').reduce((sum, inv) => sum + inv.valor, 0);
  const totalAtrasado = invoices.filter(i => i.status === 'atrasada').reduce((sum, inv) => sum + inv.valor, 0);

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
          Carregando faturas...
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
            💳 Faturas
          </h1>
          <p style={{ 
            margin: '6px 0 0 0', 
            color: '#cbd5e1', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Gerencie e acompanhe suas faturas
          </p>
        </div>
        
        <button 
          onClick={handleNewInvoice}
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
          📄 Nova Fatura
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
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>💰</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Recebido</h3>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#10b981' }}>
              R$ {totalRecebido.toLocaleString('pt-BR')}
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
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>⏳</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Pendente</h3>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#f59e0b' }}>
              R$ {totalPendente.toLocaleString('pt-BR')}
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
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>❌</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Atrasado</h3>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#ef4444' }}>
              R$ {totalAtrasado.toLocaleString('pt-BR')}
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
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📊</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Total</h3>
            <p style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#ffffff' }}>
              {invoices.length}
            </p>
          </div>
        </div>

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
              Todas ({invoices.length})
            </button>
            
            <button
              onClick={() => setFilter('paga')}
              style={{
                background: filter === 'paga' 
                  ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.8) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: filter === 'paga' ? 'white' : '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
            >
              Pagas ({invoices.filter(i => i.status === 'paga').length})
            </button>
            
            <button
              onClick={() => setFilter('pendente')}
              style={{
                background: filter === 'pendente' 
                  ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.8) 0%, rgba(217, 119, 6, 0.8) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: filter === 'pendente' ? 'white' : '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
            >
              Pendentes ({invoices.filter(i => i.status === 'pendente').length})
            </button>

            <button
              onClick={() => setFilter('atrasada')}
              style={{
                background: filter === 'atrasada' 
                  ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(220, 38, 38, 0.8) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: filter === 'atrasada' ? 'white' : '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
            >
              Atrasadas ({invoices.filter(i => i.status === 'atrasada').length})
            </button>
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
            <span style={{ fontSize: '24px' }}>📋</span>
            Lista de Faturas
          </h2>

          {filteredInvoices.length === 0 ? (
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
                Nenhuma fatura
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: '14px',
                color: '#94a3b8'
              }}>
                Não há faturas para exibir com o filtro selecionado.
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
              {filteredInvoices.map(invoice => (
                <div
                  key={invoice.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '20px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    borderLeft: `4px solid ${getStatusColor(invoice.status)}`
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
                      background: `${getStatusColor(invoice.status)}20`,
                      borderRadius: '8px',
                      padding: '12px',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {invoice.status === 'paga' ? '💰' : invoice.status === 'pendente' ? '⏳' : '❌'}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '8px'
                      }}>
                        <div>
                          <h3 style={{
                            margin: '0 0 4px 0',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#ffffff'
                          }}>
                            {invoice.numero} - {invoice.cliente}
                          </h3>
                          <p style={{
                            margin: 0,
                            fontSize: '14px',
                            color: '#cbd5e1'
                          }}>
                            {invoice.descricao}
                          </p>
                        </div>
                        <span 
                          style={{
                            padding: '6px 12px',
                            background: `${getStatusColor(invoice.status)}20`,
                            color: getStatusColor(invoice.status),
                            border: `1px solid ${getStatusColor(invoice.status)}40`,
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '600'
                          }}
                        >
                          {getStatusText(invoice.status)}
                        </span>
                      </div>

                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '16px',
                        marginTop: '12px'
                      }}>
                        <div>
                          <span style={{ fontSize: '12px', color: '#94a3b8' }}>Valor:</span>
                          <p style={{ margin: '4px 0 0 0', fontSize: '16px', fontWeight: '600', color: '#ffffff' }}>
                            R$ {invoice.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                        <div>
                          <span style={{ fontSize: '12px', color: '#94a3b8' }}>Emissão:</span>
                          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#cbd5e1' }}>
                            {new Date(invoice.emissao).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        <div>
                          <span style={{ fontSize: '12px', color: '#94a3b8' }}>Vencimento:</span>
                          <p style={{ 
                            margin: '4px 0 0 0', 
                            fontSize: '14px', 
                            color: invoice.status === 'atrasada' ? '#ef4444' : '#cbd5e1',
                            fontWeight: invoice.status === 'atrasada' ? '600' : 'normal'
                          }}>
                            {new Date(invoice.vencimento).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        <div>
                          <span style={{ fontSize: '12px', color: '#94a3b8' }}>Pagamento:</span>
                          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#cbd5e1' }}>
                            {invoice.metodoPagamento}
                          </p>
                        </div>
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
                      onClick={() => handleViewInvoice(invoice)}
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
                      👁️ Visualizar
                    </button>
                    <button 
                      onClick={() => handleDownloadInvoice(invoice)}
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
                      📥 Download
                    </button>
                    {invoice.status !== 'paga' && (
                      <button 
                        onClick={() => handlePayInvoice(invoice)}
                        style={{
                          background: 'rgba(16, 185, 129, 0.1)',
                          color: '#10b981',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        💳 Pagar
                      </button>
                    )}
                    {invoice.status === 'pendente' && (
                      <button 
                        onClick={() => handleSendReminder(invoice)}
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
                        📧 Lembrete
                      </button>
                    )}
                    <button 
                      onClick={() => handleEditInvoice(invoice)}
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
                      ✏️ Editar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {showNewInvoiceModal && (
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
                📄 Nova Fatura
              </h2>
              <button 
                onClick={() => setShowNewInvoiceModal(false)}
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
                  Cliente *
                </label>
                <input
                  type="text"
                  value={newInvoice.cliente}
                  onChange={(e) => handleInputChange('cliente', e.target.value)}
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
                  placeholder="Nome do cliente"
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
                  Valor (R$) *
                </label>
                <input
                  type="number"
                  value={newInvoice.valor}
                  onChange={(e) => handleInputChange('valor', e.target.value)}
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
                  placeholder="0.00"
                  step="0.01"
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
                  Data de Vencimento *
                </label>
                <input
                  type="date"
                  value={newInvoice.vencimento}
                  onChange={(e) => handleInputChange('vencimento', e.target.value)}
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
                  Descrição
                </label>
                <textarea
                  value={newInvoice.descricao}
                  onChange={(e) => handleInputChange('descricao', e.target.value)}
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
                  placeholder="Descrição do serviço/produto"
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button 
                onClick={() => setShowNewInvoiceModal(false)}
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
                onClick={handleAddInvoice}
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
                💾 Criar Fatura
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedInvoice && (
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
                📋 Detalhes da Fatura
              </h2>
              <button 
                onClick={() => setSelectedInvoice(null)}
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
                background: `${getStatusColor(selectedInvoice.status)}20`,
                borderRadius: '12px',
                padding: '12px',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {selectedInvoice.status === 'paga' ? '💰' : selectedInvoice.status === 'pendente' ? '⏳' : '❌'}
              </div>
              <div>
                <h3 style={{ 
                  margin: '0 0 4px 0', 
                  fontSize: '18px', 
                  fontWeight: '600',
                  color: '#ffffff'
                }}>
                  {selectedInvoice.numero}
                </h3>
                <p style={{ 
                  margin: 0, 
                  fontSize: '14px',
                  color: '#cbd5e1'
                }}>
                  {selectedInvoice.cliente}
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
                Informações da Fatura
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>Valor:</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff' }}>
                    R$ {selectedInvoice.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>Emissão:</span>
                  <span style={{ fontSize: '14px', color: '#cbd5e1' }}>
                    {new Date(selectedInvoice.emissao).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>Vencimento:</span>
                  <span style={{ 
                    fontSize: '14px', 
                    color: selectedInvoice.status === 'atrasada' ? '#ef4444' : '#cbd5e1',
                    fontWeight: selectedInvoice.status === 'atrasada' ? '600' : 'normal'
                  }}>
                    {new Date(selectedInvoice.vencimento).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>Status:</span>
                  <span style={{ 
                    fontSize: '14px', 
                    color: getStatusColor(selectedInvoice.status),
                    fontWeight: '600'
                  }}>
                    {getStatusText(selectedInvoice.status)}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>Método:</span>
                  <span style={{ fontSize: '14px', color: '#cbd5e1' }}>
                    {selectedInvoice.metodoPagamento}
                  </span>
                </div>
              </div>
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
                Descrição
              </h4>
              <p style={{ 
                margin: 0, 
                fontSize: '14px',
                color: '#cbd5e1',
                lineHeight: '1.5'
              }}>
                {selectedInvoice.descricao}
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
        
        /* Efeito hover para faturas */
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

        /* Efeito hover para inputs */
        input:hover, textarea:hover {
          border-color: rgba(99, 102, 241, 0.5) !important;
        }

        input:focus, textarea:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
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