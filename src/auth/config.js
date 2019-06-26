const localStrategy = require('passport-local')
const sequelize = require('./../models/connect').sequelize;
const User = sequelize.import('./../models/User');


module.exports = (passport) => {


    passport.serializeUser((user, done) => {
        return done(null, user.US_ID)
    })


    passport.deserializeUser((id, cb) => {
        User
            .findById(id)
            .then(user => cb(null, user))
            .catch(err => cb(err, {}))
    })

    passport.use('local-login', new localStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, username, password, done) {
            User.findOne({ where: { US_USERNAME: username } }).then((user) => {


                if (user) {
                    if (user.US_PASSWORD == password) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }

                }


                return done(null, false);
            });

        }))
}