const isLogout = require('./isLogout');

module.exports = (router, passport) => {


    router.get('/login', isLogout, (req, res) => {
        res.render('login');
    })
    router.post('/login', passport.authenticate('local-login', {
        failureRedirect: '/',
        successRedirect: '/livros'
    }))

}