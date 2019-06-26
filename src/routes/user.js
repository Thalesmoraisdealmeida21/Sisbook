const user = require('./../controllers/userController')
const isAuth = require('./auth/isAuth');
const User = user();


module.exports = (router) => {



    router.get('/user/register', (req, res) => {
        User.showView(req, res)
    })

    router.get('/user/register/save', (req, res) => {
        User.register(req, res)
    })



    router.get('/user/update/:id', isAuth, (req, res) => {
        User.showViewEdit(req, res);
    })

    router.get('/user/edit/:id', isAuth, (req, res) => {
        User.edit(req, res)
    })




    router.get('/user/delete/:id', isAuth, (req, res) => {
        User.delete(req, res)
    })


    router.get('/user/select', isAuth, (req, res) => {
        User.select(req, res)
    })
}