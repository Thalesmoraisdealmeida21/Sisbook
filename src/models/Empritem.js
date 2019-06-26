'use strict';
module.exports = (sequelize, DataTypes) => {
    const Empritem = sequelize.define('Empritem', {
        EI_EMPRESTIMO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: "Emprestimos",
                key: "EM_ID"
            }

        },
        EI_LIVRO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: "BOOKs",
                key: "BK_ID"
            }
        }
    })


    Empritem.associate = function(models) {


    };
    return Empritem;
};