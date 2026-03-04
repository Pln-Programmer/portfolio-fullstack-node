import { TecnologiasModel } from "../models/tecnologiasmodels.js";

export default class TecnologiaController {

    static async listar(req, res) {
        try {
            const tecnologia = await TecnologiasModel.findAll(
                {
                }
            )
            if (!tecnologia) {
                return res.status(406).json({ msg: "Nenhuma tecnologia encontrada" })
            }
            res.status(200).json(tecnologia)
        } catch (error) {
            res.status(500).json({ msg: "Erro interno, tente novamente mais tarde.", erro: error.message })
        }
    }

  static async criar(req, res) {
    try {
      const { nome, categoria, nivel, descricao } = req.body;

      if (!nome || !categoria || !nivel || !descricao) {
        return res.status(406).json({ msg: "Preencha todos os campos!" });
      }

      const novaTecnologia = await TecnologiasModel.create({
        nome,
        categoria,
        nivel,
        descricao,
      });

      console.log("Criado:", novaTecnologia.toJSON());

      return res.status(201).json({
        msg: "Tecnologia criada com sucesso!",
        tecnologia: novaTecnologia,
      });
    } catch (error) {
      console.error("Erro ao criar:", error);
      return res.status(500).json({
        msg: "Erro interno ao criar",
        erro: error.message,
      });
    }
  }

  static async editar(req, res) {
    try {
      const { nome, categoria, nivel, descricao } = req.body;
      const id = req.params.id;
      await TecnologiasModel.update(
        {
          nome: nome,
          categoria: categoria,
          nivel: nivel,
          descricao: descricao,
        },
        {
          where: {
            id: id,
          },
        },
      );
      res.status(200).json({ msg: "Tecnologias atualizado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({
          msg: "Erro interno, tente novamente mais tarde.",
          erro: error.message,
        });
    }
  }

  static async excluir(req, res) {
    try {
      const { id } = req.params;
      console.log(req.params.id);
      
      await TecnologiasModel.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ msg: "Tecnologias deletado com sucesso." });
    } catch (error) {
      res
        .status(500)
        .json({
          msg: "Erro interno, tente novamente mais tarde.",
          erro: error.message,
        });
    }
  }
}
