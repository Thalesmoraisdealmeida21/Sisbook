const express = require('express')
const router = express.Router();
const isAuth = require('./auth/isAuth');
const isLogout = require('./auth/isLogout');



module.exports = (passport) => {

    require('./auth/login')(router, passport)
    require('./user')(router)
    require('./turma')(router)
    require('./aluno')(router)
    require('./livro')(router)
    require('./emprestimos')(router)




    router.get('/', isAuth, (req, res) => {
        res.render('home', {
            title: "Home",
            titlePanel: "Dashboard - Sisbook"
        })
    })


    router.get('/testes', (req, res) => {
        res.render('teste', {
            title: "Home",
            titlePanel: "Dashboard - Sisbook"
        })
    })
    router.get('/logout', require('./auth/logout'));

    return router
}