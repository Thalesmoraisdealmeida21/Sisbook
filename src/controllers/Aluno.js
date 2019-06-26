const Aluno = require('./../models/connect').ALUNOS;
const sequelize = require('./../models/connect').sequelize;
const Turma = require('./../models/connect').Turmas;
const Op = sequelize.Op;



module.exports = () => {
    return {
        register: (req, res) => {
            data = {
                name: req.body.name,
                age: req.body.age,
                obs: req.body.obs,
                turma: parseInt(req.body.turma)

            }

            console.log(data)

            Aluno.create({
                AL_NAME: data.name,
                AL_IDADE: data.age,
                AL_OBS: data.obs,
                AL_TURMA: data.turma
            })


            res.status(201).json({ "msg": true })

        },

        find: (req, res) => {

            const id = req.params.id
            Aluno.findOne({
                where: {
                    AL_ID: id
                }
            }).then((result) => {
                res.status(200).json(result)
            })
        },

        getAll: (req, res) => {
            Aluno.findAll({ include: "turma" }).then((alunos) => {
                res.status(200).json(alunos);
            })
        },

        getAlunos: (req, res) => {
            Aluno.findAll({ include: "turma" }).then((alunos) => {
                res.render('aluno/index', {
                    title: "Alunos",
                    titlePanel: "Alunos",
                    alunos: alunos
                })
            })
        },

        search: (req, res) => {

            const field = req.query.field;
            const search = req.query.search;
            let dataResult = null;




            if (search === "") {

                Aluno.findAll({
                    include: "turma"
                }).then((alunos) => {
                    res.json(alunos)
                })


            } else {
                if (field === "Nome") {
                    Aluno.findAll({
                        where: {
                            AL_NAME: {
                                [Op.like]: "%" + search + "%"
                            }
                        },
                        include: "turma"
                    }).then((alunos) => {
                        res.json(alunos)
                    })
                }
                if (field === "Codigo") {
                    Aluno.findAll({
                        where: {
                            AL_ID: search
                        },
                        include: "turma"
                    }).then((alunos) => {
                        res.json(alunos)
                    })
                }
                if (field === "Idade") {
                    Aluno.findAll({
                        where: {
                            AL_IDADE: search
                        },
                        include: "turma"
                    }).then((alunos) => {
                        res.json(alunos)
                    })
                }
                if (field === "Turma") {
                    Aluno.findAll({

                        include: [{
                            model: Turma,
                            as: "turma",
                            where: {
                                TR_NAME: {
                                    [Op.like]: "%" + search + "%"
                                }
                            }
                        }]


                    }).then((alunos) => {
                        res.json(alunos)
                    })

                }

            }
        },



        delete: (req, res) => {
            const id = req.params.id


            if (Aluno.destroy({ where: { AL_ID: id } })) {
                res.redirect('/alunos')
            } else {
                res.status(301).json(['erro', "Ocorreu um erro"])
            }
        },

        getAluno: (req, res) => {
            const id = req.params.id

            Aluno.findOne({ where: { AL_ID: id } }).then((aluno) => {

                res.render('aluno/update', {
                    title: "Alunos",
                    titlePanel: "Editar Aluno",
                    aluno: aluno
                })
            })

        }


    }
}