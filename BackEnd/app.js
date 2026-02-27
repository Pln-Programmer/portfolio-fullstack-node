import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./src/config/database.js";
import UsuarioRoutes from "./src/modules/usuarios/routes/usuario.route.js"
import { UsuarioController } from "./src/modules/usuarios/controllers/usuario.controller.js"
// Carrega variáveis do arquivo .env para process.env
// Ex.: PORT, DATABASE_URL, JWT_SECRET, etc.
dotenv.config();

// Cria a aplicação Express (nosso servidor HTTP)
const app = express();


// O comando app.use(cors()); no Express (Node.js) habilita o middleware
// de Compartilhamento de Recursos entre Origens (CORS), permitindo que 
// seu back-end receba requisições de front-ends hospedados em domínios, 
// portas ou protocolos diferentes. Sem ele, navegadores bloqueiam essas 
// requisições por segurança. O padrão libera acesso para qualquer site (*). 
app.use(cors());



// Middleware para o Express entender JSON no corpo da requisição.
// Sem isso, req.body vem undefined em POST/PUT/PATCH com JSON.
app.use(express.json());

app.get("/", (req, res) => res.json({ status: "ok" }));
// Registra as rotas
app.use("/usuarios", UsuarioRoutes);

// Inicia o servidor. A porta vem do .env (process.env.PORT).
app.listen(process.env.PORT, async () => {
  // await sequelize.sync({force: true, alter: true})
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});