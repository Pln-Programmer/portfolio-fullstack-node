import express from "express";
import TecnologiaController from "../controllers/tecnologias.controller.js";
import { AuthMiddleware } from "../../../middleware/authMiddleware.js"
import { AutorizationMiddleware } from "../../../middleware/autorizationMiddleware.js";


const router = express.Router();

router.get("/", TecnologiaController.listar)
router.post("/",TecnologiaController.criar);
router.put("/:id", AuthMiddleware, AutorizationMiddleware.admin,TecnologiaController.editar);
router.delete("/:id", AuthMiddleware, AutorizationMiddleware.admin,TecnologiaController.excluir);
export default router;
