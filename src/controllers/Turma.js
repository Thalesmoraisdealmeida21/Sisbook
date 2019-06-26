const sequelize = require('./../models/connect').sequelize;
const Turma = sequelize.import('./../models/Turma');
const Aluno = sequelize.import('./../models/Aluno');


module.exports = () => {


    return {

        pages: (req, res) => {
            Turma.findAndCount().then((pages) => {
                let nregistros = parseFloat(pages.count);
                let nPages = nregistros % 5;

                if (nPages === 0) {
                    res.json(nregistros / 5);
                } else {
                    res.json(Math.trunc(nregistros / 5) + 1);
                }


            })
        },

        register: (req, res) => {
            const data = {
                name: req.query.name,
                schooling: req.query.schooling,
                year: req.query.year,
                obs: req.query.obs
            }

            switch (data.schooling) {
                case "Ensino medio":
                    data.schooling = "M"
                case "Ensino Fundamental":
                    data.schooling = "F"
            }

            switch (data.year) {
                case "1 Ano":
                    data.year = "1"
                case "2 Ano":
                    data.year = "2"
                case "3 Ano":
                    data.year = "3"
                case "4 Ano":
                    data.year = "4"
                case "5 Ano":
                    data.year = "5"
                case "6 Ano":
                    data.year = "6"
                case "7 Ano":
                    data.year = "7"
                case "8 Ano":
                    data.year = "8"
                case "9 Ano":
                    data.year = "9"
            }


            console.log(data)

            Turma.create({
                TR_NAME: data.name,
                TR_SCHOOLING: data.schooling,
                TR_YEAR: data.year,
                TR_OBS: data.obs
            })
            res.status(201).end();

        },

        getTurmas: (req, res) => {
            Turma.findAll().then((turmas) => {
                res.json(turmas)
            })
        },

        update: (req, res) => {
            Turma.update({ TR_OBS: req.query.obs }, { where: { TR_ID: req.params.id } })
            res.redirect('/turmas/update/' + req.params.id + "?status=true");
        },

        delete: (req, res) => {
            const id = req.params.id;

            Aluno.findAndCount({ where: { AL_TURMA: id } }).then((alunos) => {

                if (alunos.count === 0) {
                    Turma.destroy({ where: { TR_ID: id } })
                    res.status(200).redirect('/turmas');
                } else {
                    res.redirect('/turmas' + '?' + "msg=true");
                }
            })



        },

        select: (req, res) => {

            let page = 0;



            if (req.params.skip) {
                page = parseInt(req.params.skip) * 5
            }




            Turma.findAll({
                limit: 5,
                offset: page
            }).then((turmas => {
                res.render('turma/index', {
                    title: "Tumas",
                    titlePanel: "Turmas",
                    turmas: turmas,
                    page: req.params.skip
                })
            }))

        },


        getTurma: (req, res) => {

            Turma.findByPk(req.params.id).then((turma => {
                if (!turma) {
                    res.render('errors/not-found');
                } else {

                    res.render('turma/update', {
                        title: "Editar Turma",
                        titlePanel: "Turma " + turma.TR_NAME,
                        turma: turma,
                        msg: null
                    })
                }
            }))






        }



    }
}