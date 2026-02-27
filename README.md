# 🚀 Dev Portfolio Fullstack

## 📌 Sobre o Projeto

Este é um projeto de portfólio Fullstack desenvolvido com o objetivo de demonstrar habilidades práticas em desenvolvimento web moderno.

A aplicação permite que empresas visualizem na prática competências em:

- 🔹 Desenvolvimento Back-end (Node.js)
- 🔹 Desenvolvimento Front-end (React)
- 🔹 Banco de Dados (PostgreSQL)

Este projeto substitui o envio exclusivo de currículo em PDF, oferecendo uma apresentação técnica interativa e dinâmica.

---

# 🛠 Stack Tecnológica

## 🔙 Back-end
- Node.js
- Express

## 🎨 Front-end
- React (Vite)

## 🗄 Banco de Dados
- PostgreSQL

## 📦 ORM
- Sequelize

## 🔐 Autenticação
- JWT (JSON Web Token)

## 🏗 Arquitetura
- API separada do Front-end (arquitetura desacoplada)

---

# 📁 Estrutura do Projeto


/portfolio-BackEnd
/portfolio-FrontEnd


---

## 🔙 Estrutura do Back-end


src/
├── config/
├── controllers/
├── services/
├── models/
├── routes/
├── middlewares/
├── database/
│ ├── migrations/
│ └── seeders/
└── app.js


### Responsabilidades:
- Regras de negócio
- Conexão com banco de dados
- Autenticação
- Proteção de rotas
- API REST

---

## 🎨 Estrutura do Front-end


src/
├── pages/
├── components/
├── services/
├── hooks/
├── context/
└── App.jsx


### Responsabilidades:
- Interface visual
- Consumo da API
- Gerenciamento de estado
- Controle de autenticação
- Experiência do usuário

---

# 🗄 Modelagem do Banco de Dados

## 📌 Projetos
- id
- titulo
- descricao
- tecnologias
- imagem
- link_github
- link_producao

## 📌 Experiencias
- id
- empresa
- cargo
- periodo
- descricao

## 📌 Habilidades
- id
- nome
- nivel

---

# 🔐 Autenticação

O sistema possui um único login administrativo.

As credenciais são definidas no arquivo `.env`.

---

# ⚙️ Instalação e Configuração

## 📌 Pré-requisitos

- Node.js (LTS)
- PostgreSQL
- Git
- npm ou yarn

---

## 🔙 Instalação do Back-end

```bash
mkdir portfolio-api
cd portfolio-api
npm init -y
Instalar dependências
npm install express sequelize pg pg-hstore dotenv jsonwebtoken bcrypt cors
Dependências de desenvolvimento
npm install --save-dev nodemon sequelize-cli
Inicializar Sequelize
npx sequelize-cli init
Criar banco de dados
npx sequelize-cli db:create
Rodar migrations
npx sequelize-cli db:migrate

🎨 Instalação do Front-end
Criar projeto React com Vite
npm create vite@latest portfolio-web

Selecionar:

React

JavaScript

Instalar dependências
cd portfolio-web
npm install
Rodar projeto
npm run dev

A aplicação estará disponível em:

http://localhost:5173
🔌 Instalar Axios
npm install axios

Criar arquivo:

src/services/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000"
});
▶️ Executando o Projeto

Terminal 1 (Back-end):

npm start

Terminal 2 (Front-end):

npm start
🚀 Deploy (Sugestão)

⭐ Diferenciais do Projeto

Upload de imagens

Responsividade completa

Dark/Light Mode

README profissional

Deploy funcional

Código organizado e escalável

👨‍💻 Autor

Desenvolvido por Pedro Lucas Medeiros Nunes.
Crie o design completo de um site para o meu portfólio com as seguintes especificações:

🎯 Objetivo:
Este é um projeto de portfólio Fullstack desenvolvido com o objetivo de demonstrar habilidades práticas em desenvolvimento web moderno.

A aplicação permite que empresas visualizem na prática competências em:

- 🔹 Desenvolvimento Back-end (Node.js)
- 🔹 Desenvolvimento Front-end (React)
- 🔹 Banco de Dados (PostgreSQL)

Este projeto substitui o envio exclusivo de currículo em PDF, oferecendo uma apresentação técnica interativa e dinâmica.

👥 Público-alvo:
 Empresas

🎨 Estilo visual:
- Design moderno e minimalista
- Interface limpa e organizada
- Uso consistente de espaçamentos
- Tipografia moderna (ex: Inter, Poppins ou similar)
- Ícones simples e intuitivos
- Cores principais: [definir paleta]
- Modo claro (ou claro e escuro)

📲 Telas que devem ser criadas:
1. Splash Screen
2. Tela de Login
3. Tela de Cadastro
4. Tela Principal (Dashboard)
5. [Outras telas específicas do seu sistema]
6. Tela de Perfil
7. Tela de Configurações

🧩 Componentes obrigatórios:
- Botões primários e secundários
- Inputs com estados (normal, foco, erro)
- Cards informativos
- Navbar ou Bottom Navigation
- Feedback visual (loading, sucesso, erro)
- Ícones coerentes com a função

📐 Layout:
- Design Mobile (375x812 - padrão iPhone)
- Uso de Auto Layout
- Componentes reutilizáveis
- Sistema de design organizado
- Grid consistente

✨ Experiência do usuário:
- Fluxo intuitivo
- Hierarquia visual clara
- Fácil navegação
- Microinterações sutis

Gere o layout completo organizado em frames separados e nomeados corretamente.