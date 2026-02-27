import express from "express";
import { UsuarioController } from "../controllers/usuario.controller.js";

const router = express.Router();

router.post("/login", UsuarioController.login);
export default router;
