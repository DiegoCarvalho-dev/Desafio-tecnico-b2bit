import React, { useState, useEffect } from "react";

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNewMemberModal, setShowNewMemberModal] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
    phone: ""
  });

  useEffect(() => {
    setTimeout(() => {
      setTeam([
        {
          id: 1,
          name: "Diego Carvalho",
          role: "CEO & Founder",
          email: "diego@empresa.com",
          avatar: "👨‍💼",
          status: "active",
          department: "Gestão",
          phone: "+55 (84) 99418-2380"
        },
        {
          id: 2,
          name: "Maria Silva", 
          role: "Head de Vendas",
          email: "maria@empresa.com",
          avatar: "👩‍💼",
          status: "active",
          department: "Vendas",
          phone: "+55 (11) 98765-4321"
        },
        {
          id: 3,
          name: "Carlos Santos",
          role: "Desenvolvedor Sênior",
          email: "carlos@empresa.com",
          avatar: "👨‍💻",
          status: "active",
          department: "Tecnologia",
          phone: "+55 (21) 97654-3210"
        },
        {
          id: 4,
          name: "Ana Oliveira",
          role: "Designer UX/UI",
          email: "ana@empresa.com", 
          avatar: "👩‍🎨",
          status: "away",
          department: "Design",
          phone: "+55 (31) 96543-2109"
        },
        {
          id: 5,
          name: "Roberto Lima",
          role: "Analista de Marketing",
          email: "roberto@empresa.com",
          avatar: "📊",
          status: "active",
          department: "Marketing",
          phone: "+55 (47) 95432-1098"
        },
        {
          id: 6,
          name: "Juliana Costa",
          role: "Gerente de Projetos",
          email: "juliana@empresa.com",
          avatar: "👩‍💼",
          status: "active",
          department: "Gestão",
          phone: "+55 (85) 94321-0987"
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    return status === 'active' ? '#10b981' : '#f59e0b';
  };

  const getStatusText = (status) => {
    return status === 'active' ? '🟢 Online' : '🟡 Ausente';
  };

  const handleSendMessage = (member) => {
    alert(`📨 Abrindo chat com ${member.name}\nEmail: ${member.email}\nTelefone: ${member.phone}`);
  };

  const handleViewProfile = (member) => {
    alert(`👤 Perfil de ${member.name}\nCargo: ${member.role}\nDepartamento: ${member.department}\nStatus: ${getStatusText(member.status)}`);
  };

  const handleNewMember = () => {
    setShowNewMemberModal(true);
  };

  const handleAddMember = () => {
    if (!newMember.name || !newMember.email || !newMember.role || !newMember.department) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const member = {
      id: team.length + 1,
      ...newMember,
      avatar: "👤",
      status: "active"
    };

    setTeam([...team, member]);
    setShowNewMemberModal(false);
    setNewMember({
      name: "",
      email: "",
      role: "",
      department: "",
      phone: ""
    });
    
    alert(`✅ ${member.name} foi adicionado à equipe com sucesso!`);
  };

  const handleInputChange = (field, value) => {
    setNewMember(prev => ({
      ...prev,
      [field]: value
    }));
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
          Carregando equipe...
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
            👥 Nossa Equipe
          </h1>
          <p style={{ 
            margin: '6px 0 0 0', 
            color: '#cbd5e1', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Gerencie os membros da sua equipe
          </p>
        </div>
        
        <button 
          onClick={handleNewMember}
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
          ➕ Novo Membro
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
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>👥</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Total de Membros</h3>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#ffffff' }}>
              {team.length}
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
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🟢</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Online Agora</h3>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>
              {team.filter(member => member.status === 'active').length}
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
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏢</div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#cbd5e1' }}>Departamentos</h3>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>
              {new Set(team.map(member => member.department)).size}
            </p>
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
            <span style={{ fontSize: '24px' }}>👥</span>
            Membros da Equipe
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '20px'
          }}>
            {team.map(member => (
              <div
                key={member.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}>
                  <div style={{
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      color: 'white'
                    }}>
                      {member.avatar}
                    </div>
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        right: '-4px',
                        width: '16px',
                        height: '16px',
                        background: getStatusColor(member.status),
                        border: '2px solid #1e293b',
                        borderRadius: '50%'
                      }}
                    />
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
                        {member.name}
                      </h3>
                      <span style={{
                        fontSize: '12px',
                        color: getStatusColor(member.status),
                        fontWeight: '600'
                      }}>
                        {getStatusText(member.status)}
                      </span>
                    </div>

                    <p style={{
                      margin: '0 0 4px 0',
                      fontSize: '14px',
                      color: '#10b981',
                      fontWeight: '500'
                    }}>
                      {member.role}
                    </p>

                    <p style={{
                      margin: '0 0 4px 0',
                      fontSize: '12px',
                      color: '#cbd5e1'
                    }}>
                      {member.department}
                    </p>

                    <p style={{
                      margin: '0 0 8px 0',
                      fontSize: '12px',
                      color: '#94a3b8'
                    }}>
                      📧 {member.email}
                    </p>

                    <p style={{
                      margin: 0,
                      fontSize: '12px',
                      color: '#94a3b8'
                    }}>
                      📞 {member.phone}
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <button 
                    onClick={() => handleSendMessage(member)}
                    style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: '#3b82f6',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      flex: 1
                    }}
                  >
                    💬 Mensagem
                  </button>
                  <button 
                    onClick={() => handleViewProfile(member)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#cbd5e1',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      flex: 1
                    }}
                  >
                    👁️ Perfil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {showNewMemberModal && (
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
                ➕ Adicionar Novo Membro
              </h2>
              <button 
                onClick={() => setShowNewMemberModal(false)}
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
                  Nome Completo *
                </label>
                <input
                  type="text"
                  value={newMember.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
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
                  placeholder="Digite o nome completo"
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
                  Email *
                </label>
                <input
                  type="email"
                  value={newMember.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
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
                  placeholder="Digite o email"
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
                  Cargo *
                </label>
                <input
                  type="text"
                  value={newMember.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
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
                  placeholder="Digite o cargo"
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
                  Departamento *
                </label>
                <input
                  type="text"
                  value={newMember.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
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
                  placeholder="Digite o departamento"
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
                  Telefone
                </label>
                <input
                  type="tel"
                  value={newMember.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
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
                  placeholder="Digite o telefone"
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button 
                onClick={() => setShowNewMemberModal(false)}
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
                onClick={handleAddMember}
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
                💾 Adicionar
              </button>
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
        
        /* Efeito hover para cards de membros */
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
        input:hover {
          border-color: rgba(99, 102, 241, 0.5) !important;
        }

        input:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </div>
  );
}