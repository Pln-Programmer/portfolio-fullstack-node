'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tecnologias', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      categoria: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },

      nivel: {
        type: Sequelize.ENUM('Básico', 'Intermediário', 'Avançado'),
        allowNull: false,
        defaultValue: 'Básico',
      },

      descricao: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },

      criado_em: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },

      atualizado_em: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },

      excluido_em: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('tecnologias');
  }
};
