const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const expressEjsLayouts = require('express-ejs-layouts');
const errorPage = require('./src/middleware/error')
const passport = require('passport')
const session = require('express-session')
const app = express();





require('./src/auth/config')(passport);
require('./src/models/connect')



app.set('port', '9090')
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'bower_components')))
app.use(express.static(path.join(__dirname, 'build')))
app.use(session({
    secret: 'testesecret',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use('/', require('./src/routes/main')(passport));

app.use(errorPage.notFound);
app.use(errorPage.serverError);


app.listen(app.get('port'), () => {
    console.log('Server has been started in port ' + app.get('port'))
})