const Livro = require('./../controllers/Livro')
const livro = Livro();
const isAuth = require('./auth/isAuth');
const isLogout = require('./auth/isLogout');


module.exports = (router) => {




    router.get('/livros', isAuth, (req, res) => {
        res.redirect('/livros/page/0')
    })

    router.get('/livros/all', (req, res) => {
        livro.getAll(req, res)
    })

    router.get('/livros/find/:id', (req, res) => {
        livro.find(req, res)
    })

    router.get('/livros/get', (req, res) => {
        livro.getBooks(req, res)
    })



    router.post('/livros/search', isAuth, (req, res) => {
        livro.search(req, res);
    })

    router.get('/livros/page/:skip', isAuth, (req, res) => {
        livro.select(req, res)
    })


    router.post('/livros/pages', isAuth, (req, res) => {
        livro.pages(req, res)
    })


    router.get('/livros/new', isAuth, (req, res) => {
        res.render('livros/register', {
            title: "Livros",
            titlePanel: "Registrar novo Livro"
        })
    })


    router.post('/livros/register', isAuth, (req, res) => {
        livro.register(req, res)
    })

    router.get('/livros/delete/:id', isAuth, (req, res) => {
        livro.delete(req, res)
    })


    router.get('/livros/edit/:id', isAuth, (req, res) => {
        livro.editBook(req, res);
    })

    router.post('/livros/save', isAuth, (req, res) => {



        livro.update(req, res);
    })
}