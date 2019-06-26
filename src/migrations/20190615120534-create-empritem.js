'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Empritem', {
            EI_EMPRESTIMO: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "Emprestimos",
                    key: "EM_ID"
                }

            },
            EI_LIVRO: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "BOOKs",
                    key: "BK_ID"
                }
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};