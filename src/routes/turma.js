const turma = require('./../controllers/Turma');
const Turma = turma();
const isAuth = require('./auth/isAuth');
const isLogout = require('./auth/isLogout');

module.exports = (router) => {


    // Rotas de visualização
    router.get('/turmas/page/:skip', isAuth, (req, res) => {
        Turma.select(req, res)
    })





    router.get('/turmas/register', isAuth, (req, res) => {
        res.render('turma/register', {
            title: "Turmas",
            titlePanel: "Turmas",
            msg: ""
        })
    })

    router.get('/turmas/update/:id', isAuth, (req, res) => {
        Turma.getTurma(req, res);

    })



    //Rotas de API
    router.get('/turmas/register/save', isAuth, (req, res) => {

        Turma.register(req, res);
    })

    router.get('/turmas/delete/:id', isAuth, (req, res) => {
        Turma.delete(req, res);
    })
    router.get('/turmas/all', isAuth, (req, res) => {
        Turma.getTurmas(req, res);
    })

    router.get('/turmas/npages', isAuth, (req, res) => {
        Turma.pages(req, res);
    })

    router.get('/turmas/:id', isAuth, (req, res) => {
        Turma.getTurma(req, res);
    })

    router.get('/turmas', isAuth, (req, res) => {
        res.redirect('/turmas/page/0');
    })



    router.get('/turmas/update/save/:id', isAuth, (req, res) => {
        Turma.update(req, res);
    })

}