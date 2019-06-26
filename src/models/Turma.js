'use strict';
module.exports = (sequelize, DataTypes) => {
    const Turmas = sequelize.define('Turmas', {
        TR_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        TR_NAME: {
            type: DataTypes.STRING,
            allowNull: false
        },
        TR_SCHOOLING: {
            type: DataTypes.ENUM('M', 'F'),
            allowNull: false

        },
        TR_YEAR: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        TR_OBS: {
            type: DataTypes.TEXT,
            allowNull: true
        }

    }, {
        timestamps: false
    });
    Turmas.associate = function(models) {
        Turmas.hasMany(models.ALUNOS, { foreignKey: "AL_TURMA", as: 'turma' })
    };
    return Turmas;
};