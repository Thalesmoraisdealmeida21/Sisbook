'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Turmas', {
            TR_ID: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            TR_NAME: {
                type: Sequelize.STRING,
                allowNull: true
            },
            TR_OBS: {
                type: Sequelize.STRING,
                allowNull: true
            },
            TR_SCHOOLING: {
                type: Sequelize.ENUM('M', 'F'),
                allowNull: false
            },
            TR_YEAR: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            TR_OBS: {
                type: Sequelize.STRING,
                allowNull: true
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Turmas');
    }
};