const emprestimos = require('./../controllers/Emprestimo');
const Emprestimo = emprestimos()

const isAuth = require('./auth/isAuth');

module.exports = (router) => {

    router.get('/emprestimos', (req, res) => {
        res.render('emprestimos/index', {
            title: "Emprestimos",
            titlePanel: "Emprestimos de Livro"
        })
    })


    router.get('/emprestimos/novo', (req, res) => {
        res.render('emprestimos/new', {
            title: "Novo Emprestimo",
            titlePanel: "Emprestimos de Livro"
        })
    })




    //Rotas de API


    router.post('/emprestimo/save', (req, res) => {
        Emprestimo.save(req, res);
    })

    return router;
}