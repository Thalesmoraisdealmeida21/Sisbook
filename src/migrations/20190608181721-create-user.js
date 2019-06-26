'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            US_ID: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            US_USERNAME: {
                type: Sequelize.STRING
            },
            US_PASSWORD: {
                type: Sequelize.STRING
            },
            US_EMAIL: {
                type: Sequelize.STRING
            }
        }, {
            timestamps: false
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};