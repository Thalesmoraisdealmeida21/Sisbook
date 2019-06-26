'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('BOOKs', {
            BK_ID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },

            BK_TITLE: {
                type: Sequelize.STRING,
                allowNull: false
            },

            BK_GENRE: {
                type: Sequelize.STRING,
                allowNull: false
            },

            BK_AUTOR: {
                type: Sequelize.STRING,
                allowNull: false
            },

            BK_OBS: {
                type: Sequelize.STRING,
                allowNull: false
            },
            BK_SINOPSE: {
                type: Sequelize.TEXT,
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('BOOKs');
    }
};