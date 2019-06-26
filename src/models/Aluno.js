'use strict';
module.exports = (Sequelize, DataTypes) => {
    const Alunos = Sequelize.define('ALUNOS', {
        AL_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        AL_NAME: {
            type: DataTypes.STRING,
            allowNull: false
        },
        AL_IDADE: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        AL_OBS: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        AL_TURMA: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Turmas',
                key: 'TR_ID'
            }
        }


    }, {
        timestamps: false
    });
    Alunos.associate = function(models) {
        Alunos.belongsTo(models.Turmas, { foreignKey: 'AL_TURMA', as: 'turma' })
    };
    return Alunos;
};