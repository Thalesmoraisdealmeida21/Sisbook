'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ALUNOs', {
            AL_ID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true

            },
            AL_NAME: {
                type: Sequelize.STRING,
                allowNull: false
            },
            AL_IDADE: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            AL_OBS: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            AL_TURMA: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Turmas',
                    key: 'TR_ID'
                }
            }

        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('ALUNOs');
    }
};