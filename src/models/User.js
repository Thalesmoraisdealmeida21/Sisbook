'use strict';
module.exports = (Sequelize, DataTypes) => {
    const Users = Sequelize.define('Users', {
        US_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        US_USERNAME: {
            type: DataTypes.STRING,

        },
        US_PASSWORD: {
            type: DataTypes.STRING,

        },
        US_EMAIL: {
            type: DataTypes.STRING,
        }

    }, {
        timestamps: false
    })
    Users.associate = function(models) {
        // associations can be defined here
    };
    return Users;
};