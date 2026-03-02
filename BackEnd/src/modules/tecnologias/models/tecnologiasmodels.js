import sequelize from "../../../config/database.js";
import { DataTypes } from "sequelize";

export const TecnologiasModel = sequelize.define(
  "TecnologiaModels",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "O nome não pode estar vazio",
        },
        len: {
          args: [3, 100],
          msg: "O nome deve ter entre 3 e 100 caracteres",
        },
      },
    },

    categoria: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "A categoria é obrigatória",
        },
      },
    },

    nivel: {
      type: DataTypes.ENUM("Básico", "Intermediário", "Avançado"),
      allowNull: false,
      defaultValue: "Básico",
    },

    descricao: {
      type: DataTypes.STRING(300),
      allowNull: true,
      validate: {
        len: {
          args: [0, 300],
          msg: "A descrição pode ter no máximo 300 caracteres",
        },
      },
    },
  },
  {
    tableName: "tecnologias",
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
    deletedAt: "excluido_em",
    paranoid: true,
  },
);
