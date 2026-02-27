import { UsuarioModel } from "../models/usuario.model.js";
import dotenv from "dotenv/config"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export class UsuarioController {

    static async login(req, res) {
        try {
            const { email, senha } = req.body;
            console.log(req.body)
            if (!email || !senha) {
                return res.status(400).json({ erro: "email e senha são obrigatórios" });
            }
            const usuario = await UsuarioModel.findOne(
                {
                    where: {
                        email: email
                    }
                }
            )
            if (!usuario) {
                return res.status(404).json({ erro: "Usuário não encontrado" });
            }
            // Compara senha digitada com o hash salvo no banco
            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if (!senhaValida) {
                return res.status(401).json({ erro: "E-mail ou senha incorreta" });
            }

            const token = jwt.sign(
                {
                    id: usuario.id,
                    email: usuario.email,
                    perfil: usuario.perfil
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN
                }
            );

            return res.json({ mensagem: "Login bem-sucedido!", token });
        } catch (error) {
            res.status(500).json({ msg: "Erro interno, tente novamente mais tarde.", erro: error.message })
        }
    }
}