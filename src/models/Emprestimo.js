'use strict';
module.exports = (sequelize, DataTypes) => {
    const Emprestimos = sequelize.define('Emprestimos', {
        EM_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        EM_USER: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "US_ID"
            }
        },
        EM_ALUNO: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "ALUNOS",
                key: "AL_ID"
            }

        },
        EM_OBSERV: {
            type: DataTypes.STRING,
            allowNull: false
        },
        EM_STATUS: { //ABERTO, FECHADO, ATRASADO
            type: DataTypes.ENUM('A', 'F', 'ATR'),
            allowNull: true
        }

    }, {
        timestamps: false
    });
    Emprestimos.associate = function(models) {
        //console.log(models)
        Emprestimos.belongsToMany(models.BOOKS, { through: "EmpresLivros" })

    };
    return Emprestimos;
};