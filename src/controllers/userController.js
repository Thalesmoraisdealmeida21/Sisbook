const sequelize = require('./../models/connect').sequelize;
const User = sequelize.import('./../models/User');

module.exports = () => {

    return {

        showView: (req, res) => {
            res.render('user/register', {
                title: "Cadastro de usuario",
                layout: 'layout',
                titlePanel: "Registrar Novo Usuario",
                msg: ""
            })
        },
        showViewEdit: (req, res) => {
            User.findByPk(req.params.id).then((user) => {
                res.render('user/update', {
                    user: user,
                    title: "Alterar Registro",
                    titlePanel: "Alterar Registro"
                });
            })
        },
        register: (req, res) => {

            const data = {
                username: req.query.username,
                email: req.query.email,
                password: req.query.password
            }

            User.create({
                US_USERNAME: data.username,
                US_EMAIL: data.email,
                US_PASSWORD: data.password
            })

            res.render('user/register', {
                title: "Cadastro de usuario",
                layout: 'layout',
                titlePanel: "Registrar Novo Usuario",
                msg: "Usuario Registrado com sucesso"
            })

        },

        edit: (req, res) => {
            User.update({
                US_USERNAME: req.query.username,
                US_EMAIL: req.query.email,
                US_PASSWORD: req.query.password
            }, {
                where: {
                    US_ID: req.params.id
                }
            })

            res.redirect('/user/select')


        },

        delete: (req, res) => {
            const id = req.params.id
            User.destroy({ where: { US_ID: id } })
            res.redirect('/user/select')
        },

        select: (req, res) => {
            User.findAll().then((users => {
                res.render('user/search', {
                    title: "Usuarios",
                    titlePanel: "Usuarios",
                    usuarios: users
                })
            }))
        }
    }





}