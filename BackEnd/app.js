import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./src/config/database.js";
import UsuarioRoutes from "./src/modules/usuarios/routes/usuario.route.js"
import TecnologiaRoutes from "./src/modules/tecnologias/routes/tecnologias.routes.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ status: "ok" }));

app.use("/usuarios", UsuarioRoutes);
app.use("/tecnologias", TecnologiaRoutes);

app.listen(process.env.PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});