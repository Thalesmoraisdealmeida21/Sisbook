'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Emprestimos', {
            EM_ID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            EM_USER: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Users",
                    key: "US_ID"
                }
            },
            EM_ALUNO: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "ALUNOs",
                    key: "AL_ID"
                }

            },
            EM_OBSERV: {
                type: Sequelize.STRING,
                allowNull: false
            },
            EM_STATUS: { //ABERTO, FECHADO, ATRASADO
                type: Sequelize.ENUM('A', 'F', 'ATR'),
                allowNull: true
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Emprestimos');
    }
};