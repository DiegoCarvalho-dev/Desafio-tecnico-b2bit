# 📊 Desafio B2BIT - Dashboard Administrativo

Este projeto é um **painel administrativo moderno e responsivo**, desenvolvido em **React.js (Vite)** com **Node.js no backend**, seguindo boas práticas de design e arquitetura.  
O sistema tem como objetivo fornecer uma **plataforma de gestão completa**, com **dashboard interativo**, relatórios, integrações e gerenciamento de usuários.

---

## 🚀 Tecnologias Utilizadas

### Frontend
- ⚛️ **React.js** (com Vite)
- 🎨 **CSS Modules** para estilização
- 📊 **Recharts** para gráficos interativos
- 🌐 **React Router DOM** para navegação entre páginas

### Backend
- 🟢 **Node.js**
- 🔑 **Autenticação com JWT**
- 📦 **Express.js** para rotas e API

---

## ✅ Funcionalidades Principais

- 🔐 **Autenticação de usuários** (login funcional)
- 📊 **Dashboard interativo** com:
  - Cards dinâmicos de **Usuários, Vendas e Receita**
  - Gráfico de **Vendas Mensais**
  - Visualização por mês (Janeiro, Fevereiro, Março…)
- ⚙️ **Configurações personalizáveis**
- 👤 **Página de Perfil**
- 🔔 **Notificações**
- 🧑‍🤝‍🧑 **Gerenciamento de equipe**
- 📅 **Calendário**
- 📝 **Relatórios**
- 💳 **Faturas**
- 🔗 **Integrações**
- 📞 **Suporte**

---

## ⚡ Instalação e Execução

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/DiegoCarvalho-dev/Desafio-tecnico-b2bit.git

# Instalar dependências
cd dasafio-b2bit
npm install
npm run dev

# Executar o frontend (React)
npm run dev

# Executar o backend (Node.js)
cd backend
npm install
npm start
```
## 🔑 Credenciais de Acesso

### Para acessar o sistema, utilize as credenciais de teste:
```bash
Email: teste@empresa.com

Senha: 12T456
```
## 📂 Estrutura de Pastas
```bash
desafio-b2bit/
│── backend/              # Código do servidor Node.js (API, autenticação, rotas)
│   ├── routes/           # Rotas de autenticação
│   └── server.js         # Configuração principal do backend
│
│── src/                  # Código do frontend React
│   ├── components/       # Componentes reutilizáveis
│   │   └── layout/       # Layout principal (Sidebar, PageLayout, etc.)
│   ├── pages/            # Páginas do sistema (Login, Dashboard, etc.)
│   ├── App.js            # Configuração de rotas
│   └── index.js          # Ponto de entrada
│
│── package.json          # Dependências principais
```
## 📑 Páginas Disponíveis

- Login → Tela inicial com autenticação

- Dashboard (Activity) → Resumo geral

- Calendar → Gerenciamento de eventos

- Faturas → Exibição de faturas

- Integrações → Conexões externas

- Notificações → Central de alertas

- Perfil (Profile) → Informações do usuário

- Relatórios → Visualização de relatórios

- Configurações (Settings) → Ajustes do sistema

- Suporte (Support) → Canal de contato

- Equipe (Team) → Gestão de membros

## 🖥️ Deploy

### O projeto está 100% funcional localmente, e para colocar no ar basta realizar o deploy do frontend em serviços como:
```bash
Vercel

Netlify

Render
```
### E do backend em:
```bash
Render

Railway

Heroku
```
### Passo básico do deploy:
```bash
Configure variáveis de ambiente (se necessário).

Suba o backend em um serviço que suporte Node.js.

Configure o frontend para apontar para a URL do backend publicado.

Suba o frontend no serviço de hospedagem.
```

## 📄 Licença

#### Este projeto foi desenvolvido para fins de estudo e demonstração de habilidades.
#### Livre para utilização e adaptação.

## ✨ Autor

### 👤 Diego Ricardo Carvalho
📧 diegoricardo2527@gmail.com

### 💼 LinkedIn
 www.linkedin.com/in/diegoricardo-dev
