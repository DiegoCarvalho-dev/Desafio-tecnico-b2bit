import React, { useState, useRef } from "react";
import SalesChart from "../components/SalesChart";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Relatorios() {
  const [relatorioAtivo, setRelatorioAtivo] = useState(null);
  const [loading, setLoading] = useState(false);
  const salesChartRef = useRef(null);
  const usersChartRef = useRef(null);

  const dadosVendas = [
    { month: 'Jan', sales: 3200 },
    { month: 'Fev', sales: 4100 },
    { month: 'Mar', sales: 2800 },
    { month: 'Abr', sales: 5100 },
    { month: 'Mai', sales: 4200 },
    { month: 'Jun', sales: 6300 },
    { month: 'Jul', sales: 4800 },
    { month: 'Ago', sales: 7200 },
    { month: 'Set', sales: 5900 },
    { month: 'Out', sales: 8100 },
    { month: 'Nov', sales: 6800 },
    { month: 'Dez', sales: 9200 }
  ];

  const dadosUsuarios = [
    { month: 'Jan', users: 1200 },
    { month: 'Fev', users: 1900 },
    { month: 'Mar', users: 1500 },
    { month: 'Abr', users: 2100 },
    { month: 'Mai', users: 1800 },
    { month: 'Jun', users: 2400 }
  ];

  const visualizarRelatorio = (tipo) => {
    setRelatorioAtivo(tipo);
  };

  const fecharRelatorio = () => {
    setRelatorioAtivo(null);
  };

  const gerarPDFVendas = async () => {
    setLoading(true);
    try {
      const element = salesChartRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#0f172a'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.setFontSize(20);
      pdf.setTextColor(59, 130, 246);
      pdf.text('Relatório de Vendas - B2Bit', pdfWidth / 2, 20, { align: 'center' });

      pdf.setFontSize(12);
      pdf.setTextColor(100, 116, 139);
      pdf.text(`Gerado em: ${new Date().toLocaleDateString()}`, pdfWidth / 2, 30, { align: 'center' });

      pdf.addImage(imgData, 'PNG', 10, 40, pdfWidth - 20, pdfHeight * 0.6);

      pdf.setFontSize(14);
      pdf.setTextColor(255, 255, 255);
      pdf.text('Resumo das Vendas:', 15, pdfHeight * 0.6 + 60);

      pdf.setFontSize(10);
      pdf.setTextColor(203, 213, 225);
      
      const totalVendas = dadosVendas.reduce((sum, item) => sum + item.sales, 0);
      const mediaVendas = totalVendas / dadosVendas.length;
      const maiorVenda = Math.max(...dadosVendas.map(item => item.sales));
      const menorVenda = Math.min(...dadosVendas.map(item => item.sales));

      pdf.text(`• Total de Vendas: R$ ${totalVendas.toLocaleString()}`, 20, pdfHeight * 0.6 + 75);
      pdf.text(`• Média Mensal: R$ ${mediaVendas.toLocaleString()}`, 20, pdfHeight * 0.6 + 85);
      pdf.text(`• Maior Venda: R$ ${maiorVenda.toLocaleString()}`, 20, pdfHeight * 0.6 + 95);
      pdf.text(`• Menor Venda: R$ ${menorVenda.toLocaleString()}`, 20, pdfHeight * 0.6 + 105);

      pdf.save(`relatorio-vendas-${new Date().getTime()}.pdf`);
      
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const gerarPDFUsuarios = async () => {
    setLoading(true);
    try {
      const element = usersChartRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#0f172a'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.setFontSize(20);
      pdf.setTextColor(16, 185, 129);
      pdf.text('Relatório de Usuários - B2Bit', pdfWidth / 2, 20, { align: 'center' });

      pdf.setFontSize(12);
      pdf.setTextColor(100, 116, 139);
      pdf.text(`Gerado em: ${new Date().toLocaleDateString()}`, pdfWidth / 2, 30, { align: 'center' });

      pdf.addImage(imgData, 'PNG', 10, 40, pdfWidth - 20, pdfHeight * 0.6);

      pdf.setFontSize(14);
      pdf.setTextColor(255, 255, 255);
      pdf.text('Resumo de Usuários:', 15, pdfHeight * 0.6 + 60);

      pdf.setFontSize(10);
      pdf.setTextColor(203, 213, 225);
      
      const totalUsuarios = dadosUsuarios.reduce((sum, item) => sum + item.users, 0);
      const mediaUsuarios = totalUsuarios / dadosUsuarios.length;
      const maiorUsuario = Math.max(...dadosUsuarios.map(item => item.users));
      const crescimento = ((dadosUsuarios[dadosUsuarios.length - 1].users - dadosUsuarios[0].users) / dadosUsuarios[0].users * 100).toFixed(1);

      pdf.text(`• Total de Usuários: ${totalUsuarios.toLocaleString()}`, 20, pdfHeight * 0.6 + 75);
      pdf.text(`• Média Mensal: ${mediaUsuarios.toLocaleString()}`, 20, pdfHeight * 0.6 + 85);
      pdf.text(`• Pico de Usuários: ${maiorUsuario.toLocaleString()}`, 20, pdfHeight * 0.6 + 95);
      pdf.text(`• Crescimento: +${crescimento}%`, 20, pdfHeight * 0.6 + 105);

      pdf.save(`relatorio-usuarios-${new Date().getTime()}.pdf`);
      
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const exportarTudo = async () => {
    setLoading(true);
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();

      pdf.setFontSize(20);
      pdf.setTextColor(59, 130, 246);
      pdf.text('Relatório Completo - B2Bit', pdfWidth / 2, 20, { align: 'center' });

      pdf.setFontSize(12);
      pdf.setTextColor(100, 116, 139);
      pdf.text(`Gerado em: ${new Date().toLocaleDateString()}`, pdfWidth / 2, 30, { align: 'center' });

      const salesCanvas = await html2canvas(salesChartRef.current, {
        scale: 1.5,
        useCORS: true,
        logging: false,
        backgroundColor: '#0f172a'
      });
      const salesImgData = salesCanvas.toDataURL('image/png');
      pdf.addImage(salesImgData, 'PNG', 10, 40, pdfWidth - 20, 80);

      pdf.setFontSize(14);
      pdf.setTextColor(59, 130, 246);
      pdf.text('Relatório de Vendas:', 15, 130);
      
      pdf.setFontSize(10);
      pdf.setTextColor(203, 213, 225);
      const totalVendas = dadosVendas.reduce((sum, item) => sum + item.sales, 0);
      pdf.text(`• Total: R$ ${totalVendas.toLocaleString()}`, 20, 140);
      pdf.text(`• Período: ${dadosVendas.length} meses`, 20, 147);

      pdf.addPage();

      const usersCanvas = await html2canvas(usersChartRef.current, {
        scale: 1.5,
        useCORS: true,
        logging: false,
        backgroundColor: '#0f172a'
      });
      const usersImgData = usersCanvas.toDataURL('image/png');
      pdf.addImage(usersImgData, 'PNG', 10, 20, pdfWidth - 20, 80);

      pdf.setFontSize(14);
      pdf.setTextColor(16, 185, 129);
      pdf.text('Relatório de Usuários:', 15, 110);
      
      pdf.setFontSize(10);
      pdf.setTextColor(203, 213, 225);
      const totalUsuarios = dadosUsuarios.reduce((sum, item) => sum + item.users, 0);
      pdf.text(`• Total: ${totalUsuarios.toLocaleString()} usuários`, 20, 120);
      pdf.text(`• Período: ${dadosUsuarios.length} meses`, 20, 127);

      pdf.save(`relatorio-completo-b2bit-${new Date().getTime()}.pdf`);

    } catch (error) {
      console.error('Erro ao exportar relatórios:', error);
      alert('Erro ao exportar relatórios. Tente novamente.');
    } finally {
      setLoading(false);
    }
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
            📊 Relatórios
          </h1>
          <p style={{ 
            margin: '6px 0 0 0', 
            color: '#cbd5e1', 
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Análises detalhadas com gráficos interativos
          </p>
        </div>
        <button 
          style={{
            background: loading 
              ? 'linear-gradient(135deg, rgba(100, 116, 139, 0.8) 0%, rgba(71, 85, 105, 0.8) 100%)'
              : 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            opacity: loading ? 0.7 : 1
          }}
          onClick={exportarTudo}
          disabled={loading}
        >
          {loading ? '⏳ Exportando...' : '📈 Exportar Tudo'}
        </button>
      </div>

      <div style={{
        padding: '32px',
        position: 'relative',
        zIndex: '1'
      }}>

        <div style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '32px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            minWidth: '180px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#cbd5e1' }}>Vendas Totais</h3>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#ffffff' }}>R$ 68.700</p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            minWidth: '180px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#cbd5e1' }}>Usuários Ativos</h3>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#ffffff' }}>1.420</p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            minWidth: '180px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#cbd5e1' }}>Crescimento</h3>
            <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>+28%</p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '24px'
        }}>

          <div 
            ref={salesChartRef}
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}
          >
            <h2 style={{ 
              margin: '0 0 16px 0', 
              fontSize: '20px', 
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#ffffff'
            }}>
              <span style={{ fontSize: '24px' }}>📈</span>
              Relatório de Vendas
            </h2>
            
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '0px 16px 0px 0px',
              marginBottom: '20px'
            }}>
              <SalesChart data={dadosVendas} />
            </div>

            <p style={{ 
              margin: '0 0 24px 0', 
              color: '#cbd5e1',
              lineHeight: '1.5'
            }}>
              Análise completa do desempenho de vendas por período, métricas de conversão e tendências de mercado.
            </p>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                style={{
                  background: loading 
                    ? 'linear-gradient(135deg, rgba(100, 116, 139, 0.8) 0%, rgba(71, 85, 105, 0.8) 100%)'
                    : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  flex: '1',
                  opacity: loading ? 0.7 : 1
                }}
                onClick={gerarPDFVendas}
                disabled={loading}
              >
                {loading ? '⏳ Gerando...' : '📄 Gerar PDF'}
              </button>
              <button 
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  flex: '1'
                }}
                onClick={() => visualizarRelatorio('vendas')}
              >
                👀 Detalhes
              </button>
            </div>
          </div>

          <div 
            ref={usersChartRef}
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}
          >
            <h2 style={{ 
              margin: '0 0 16px 0', 
              fontSize: '20px', 
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#ffffff'
            }}>
              <span style={{ fontSize: '24px' }}>👥</span>
              Relatório de Usuários
            </h2>
            
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '0px 16px 0px 0px',
              marginBottom: '20px'
            }}>
              <SalesChart 
                data={dadosUsuarios}
                dataKey="users"
                strokeColor="#10b981"
              />
            </div>

            <p style={{ 
              margin: '0 0 24px 0', 
              color: '#cbd5e1',
              lineHeight: '1.5'
            }}>
              Estatísticas de usuários ativos, engajamento, crescimento da base e métricas de retenção.
            </p>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                style={{
                  background: loading 
                    ? 'linear-gradient(135deg, rgba(100, 116, 139, 0.8) 0%, rgba(71, 85, 105, 0.8) 100%)'
                    : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  flex: '1',
                  opacity: loading ? 0.7 : 1
                }}
                onClick={gerarPDFUsuarios}
                disabled={loading}
              >
                {loading ? '⏳ Gerando...' : '📄 Gerar PDF'}
              </button>
              <button 
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  flex: '1'
                }}
                onClick={() => visualizarRelatorio('usuarios')}
              >
                👀 Detalhes
              </button>
            </div>
          </div>

        </div>

        {relatorioAtivo && (
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
              maxWidth: '800px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto'
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
                  {relatorioAtivo === 'vendas' && '📈 Detalhes - Vendas'}
                  {relatorioAtivo === 'usuarios' && '👥 Detalhes - Usuários'}
                </h2>
                <button 
                  onClick={fecharRelatorio}
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

              <div style={{ height: '300px', marginBottom: '20px' }}>
                {relatorioAtivo === 'vendas' && <SalesChart data={dadosVendas} />}
                {relatorioAtivo === 'usuarios' && <SalesChart data={dadosUsuarios} dataKey="users" strokeColor="#10b981" />}
              </div>

              <div style={{
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#ffffff' }}>📋 Análise Detalhada</h4>
                <p style={{ margin: 0, color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
                  {relatorioAtivo === 'vendas' && 'Crescimento consistente ao longo do ano com pico de R$ 9.200 em Dezembro. Tendência positiva com aumento médio de 15% mensal.'}
                  {relatorioAtivo === 'usuarios' && 'Base de usuários cresceu 100% em 6 meses. Alta taxa de retenção (85%) e engajamento consistente.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        /* Efeito hover para botões principais */
        button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        /* Efeito hover para cards de métricas */
        div[style*="background: linear-gradient(135deg, rgba(30, 41, 59, 0.8)"]:hover {
          transform: translateY(-2px);
          boxShadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
        
        /* Efeito hover para cards de relatório */
        div[style*="background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)"]:hover {
          transform: translateY(-2px);
          boxShadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}