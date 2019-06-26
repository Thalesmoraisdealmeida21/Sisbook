'use strict';
module.exports = (Sequelize, DataTypes) => {
    const Livros = Sequelize.define('BOOKS', {

        BK_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        BK_TITLE: {
            type: DataTypes.STRING,
            allowNull: false
        },

        BK_GENRE: {
            type: DataTypes.STRING,
            allowNull: false
        },

        BK_AUTOR: {
            type: DataTypes.STRING,
            allowNull: false
        },

        BK_OBS: {
            type: DataTypes.STRING,
            allowNull: false
        },
        BK_SINOPSE: {
            type: DataTypes.TEXT,
            allowNull: false
        }

    }, {
        timestamps: false
    })

    Livros.associate = function(models) {
        Livros.belongsToMany(models.Emprestimos, { through: "EmpresLivros" })
    };
    return Livros;
};