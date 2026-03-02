import { TecnologiasModel } from "../models/tecnologiasmodels.js"

export default class TecnologiaController{

     static async criar(req, res) {
        try {
            const { nome, categoria, nivel, descricao } = req.body
            await TecnologiasModel.create(
                {
                    nome: nome,
                    categoria: categoria,
                    nivel: nivel,
                    descricao: descricao
                }
            )
            if (!nome || !categoria || !nivel || !descricao) {
                return res.status(406).json({ msg: 'Preencha todos os campos!' })
            }
            res.status(201).json({ msg: 'Tecnologias criado com sucesso!' })
        } catch (error) {
            res.status(500).json({ msg: "Erro interno, tente novamente mais tarde.", erro: error.message })
        }
    }

    static async editar(req, res) {
        try {
            const { nome, categoria, nivel, descricao } = req.body
            const id = req.params.id
            await TecnologiasModel.update(
                {
                    nome: nome,
                    categoria: categoria,
                    nivel: nivel,
                    descricao: descricao
                },
                {
                    where: {
                        id: id
                    }
                }
            )
            res.status(200).json({ msg: 'Tecnologias atualizado com sucesso!' })
        } catch (error) {
            res.status(500).json({ msg: "Erro interno, tente novamente mais tarde.", erro: error.message })
        }
    }

    static async excluir(req, res) {
        try {
            const { id } = req.params;
            await TecnologiasModel.destroy(
                {
                    where: {
                        id: id
                    }
                }
            )
            res.status(200).json({ msg: "Tecnologias deletado com sucesso." })
        } catch (error) {
            res.status(500).json({ msg: "Erro interno, tente novamente mais tarde.", erro: error.message })
        }
    }

}