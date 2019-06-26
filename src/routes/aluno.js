const aluno = require('./../controllers/Aluno');
const turma = require('./../controllers/Turma');
const isAuth = require('./auth/isAuth');
const Aluno = aluno();
const Turma = turma();

module.exports = (router) => {

    router.get('/alunos/register', (req, res) => {

        res.render('aluno/register', {
            title: "Alunos",
            titlePanel: "Cadastro de Aluno",
        })
    })


    router.get('/alunos', isAuth, (req, res) => {
        Aluno.getAlunos(req, res)
    })
    router.get('/alunos/all', (req, res) => {
        Aluno.getAll(req, res)
    })


    router.get('/alunos/search', isAuth, (req, res) => {
        Aluno.search(req, res)
    })

    router.get('/alunos/:id', isAuth, (req, res) => {
        Aluno.getAluno(req, res)
    })
    router.get('/alunos/find/:id', (req, res) => {
        Aluno.find(req, res)
    })

    router.get('/alunos/delete/:id', isAuth, (req, res) => {
        Aluno.delete(req, res)
    })



    router.post('/alunos/register/save', isAuth, (req, res) => {
        Aluno.register(req, res)
    })

}