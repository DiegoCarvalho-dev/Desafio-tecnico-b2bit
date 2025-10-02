import React, { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    darkMode: true,
    language: 'pt-br',
    timezone: 'America/Sao_Paulo'
  });

  const [loading, setLoading] = useState({
    cache: false,
    export: false,
    delete: false
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const limparCache = async () => {
    setLoading(prev => ({ ...prev, cache: true }));
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    localStorage.removeItem('app-cache');
    sessionStorage.clear();
    
    setLoading(prev => ({ ...prev, cache: false }));
    alert('✅ Cache limpo com sucesso!');
  };

  const exportarDados = async () => {
    setLoading(prev => ({ ...prev, export: true }));
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const dadosExportacao = {
      usuario: {
        nome: "Usuário B2Bit",
        email: "diegoricardo2527@gmail.com",
        ultimoAcesso: new Date().toISOString()
      },
      configuracoes: settings,
      metricas: {
        vendasTotais: 68700,
        usuariosAtivos: 1420,
        crescimento: "28%"
      },
      dataExportacao: new Date().toISOString()
    };


    const dadosString = JSON.stringify(dadosExportacao, null, 2);
    const blob = new Blob([dadosString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dados-b2bit-${new Date().getTime()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setLoading(prev => ({ ...prev, export: false }));
    alert('📊 Dados exportados com sucesso!');
  };

  const excluirConta = async () => {
    const confirmacao = window.confirm(
      '🚨 ATENÇÃO: Esta ação é irreversível!\n\n' +
      'Todos os seus dados serão permanentemente excluídos.\n' +
      'Tem certeza que deseja excluir sua conta?'
    );

    if (!confirmacao) return;

    setLoading(prev => ({ ...prev, delete: true }));
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setLoading(prev => ({ ...prev, delete: false }));
    alert('✅ Conta excluída com sucesso!');
    
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
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
            ⚙️ Configurações
          </h1>
          <p style={{ 
            margin: '6px 0 0 0', 
            color: '#cbd5e1', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Gerencie suas preferências e configurações da conta
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
          💾 Salvar Alterações
        </button>
      </div>

      <div style={{
        padding: '32px',
        position: 'relative',
        zIndex: '1'
      }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px'
        }}>

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
              <span style={{ fontSize: '24px' }}>🔔</span>
              Preferências de Notificação
            </h2>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#ffffff' }}>Notificações Push</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#cbd5e1' }}>Receba notificações do sistema</p>
              </div>
              <div 
                style={{
                  width: '50px',
                  height: '24px',
                  background: settings.notifications ? '#10b981' : 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onClick={() => handleSettingChange('notifications', !settings.notifications)}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: '#ffffff',
                  borderRadius: '50%',
                  transform: settings.notifications ? 'translateX(26px)' : 'translateX(0)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                }} />
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#ffffff' }}>Atualizações por Email</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#cbd5e1' }}>Receba newsletters e atualizações</p>
              </div>
              <div 
                style={{
                  width: '50px',
                  height: '24px',
                  background: settings.emailUpdates ? '#10b981' : 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onClick={() => handleSettingChange('emailUpdates', !settings.emailUpdates)}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: '#ffffff',
                  borderRadius: '50%',
                  transform: settings.emailUpdates ? 'translateX(26px)' : 'translateX(0)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                }} />
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 0'
            }}>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#ffffff' }}>Modo Escuro</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#cbd5e1' }}>Interface em tema escuro</p>
              </div>
              <div 
                style={{
                  width: '50px',
                  height: '24px',
                  background: settings.darkMode ? '#10b981' : 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onClick={() => handleSettingChange('darkMode', !settings.darkMode)}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: '#ffffff',
                  borderRadius: '50%',
                  transform: settings.darkMode ? 'translateX(26px)' : 'translateX(0)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                }} />
              </div>
            </div>
          </div>

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
              <span style={{ fontSize: '24px' }}>👤</span>
              Configurações de Conta
            </h2>

            {/* Idioma */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '14px', 
                fontWeight: '600',
                color: '#cbd5e1'
              }}>
                Idioma
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  cursor: 'pointer',
                  appearance: 'none',
                }}
              >
                <option value="pt-br" style={{ background: '#1e293b', color: '#ffffff' }}>Português (Brasil)</option>
                <option value="en" style={{ background: '#1e293b', color: '#ffffff' }}>English</option>
                <option value="es" style={{ background: '#1e293b', color: '#ffffff' }}>Español</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '14px', 
                fontWeight: '600',
                color: '#cbd5e1'
              }}>
                Fuso Horário
              </label>
              <select
              value={settings.timezone}
              onChange={(e) => handleSettingChange('timezone', e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none',
              }}
            >
              <option value="America/Sao_Paulo" style={{ background: '#1e293b', color: '#ffffff' }}>Brasília (GMT-3)</option>
              <option value="America/New_York" style={{ background: '#1e293b', color: '#ffffff' }}>New York (GMT-5)</option>
              <option value="Europe/London" style={{ background: '#1e293b', color: '#ffffff' }}>London (GMT+0)</option>
              <option value="Asia/Tokyo" style={{ background: '#1e293b', color: '#ffffff' }}>Tokyo (GMT+9)</option>
            </select>
            </div>

            <button style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '12px 20px',
              borderRadius: '10px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginTop: '10px'
            }}>
              🔒 Alterar Senha
            </button>
          </div>

        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
          borderRadius: '20px',
          padding: '28px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginTop: '24px',
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
            <span style={{ fontSize: '24px' }}>⚡</span>
            Preferências Avançadas
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <button 
              onClick={limparCache}
              disabled={loading.cache}
              style={{
                background: loading.cache 
                  ? 'linear-gradient(135deg, rgba(100, 116, 139, 0.8) 0%, rgba(71, 85, 105, 0.8) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: loading.cache ? '#94a3b8' : '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '16px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: loading.cache ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                opacity: loading.cache ? 0.7 : 1
              }}
            >
              {loading.cache ? '⏳ Limpando...' : '🗑️ Limpar Cache'}
            </button>

            <button 
              onClick={exportarDados}
              disabled={loading.export}
              style={{
                background: loading.export 
                  ? 'linear-gradient(135deg, rgba(100, 116, 139, 0.8) 0%, rgba(71, 85, 105, 0.8) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: loading.export ? '#94a3b8' : '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '16px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: loading.export ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                opacity: loading.export ? 0.7 : 1
              }}
            >
              {loading.export ? '⏳ Exportando...' : '📊 Exportar Dados'}
            </button>

            <button 
              onClick={excluirConta}
              disabled={loading.delete}
              style={{
                background: loading.delete 
                  ? 'linear-gradient(135deg, rgba(100, 116, 139, 0.8) 0%, rgba(71, 85, 105, 0.8) 100%)'
                  : 'rgba(239, 68, 68, 0.2)',
                color: loading.delete ? '#94a3b8' : '#fca5a5',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                padding: '16px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: loading.delete ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                opacity: loading.delete ? 0.7 : 1
              }}
            >
              {loading.delete ? '⏳ Excluindo...' : '🚫 Excluir Conta'}
            </button>
          </div>
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
      `}</style>
    </div>
  );
}