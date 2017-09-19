var User = require('mongoose').model('User');
var path = require("path");

exports.getUsers = (req, res, next) => {
    User.find((err, user) => {
        if (err) {
            console.log('Failure');
            return next(err);
        }
        else {
            console.log('Success');
            res.json(user);
        }
    });
}

exports.create = (req, res, next) => {
    var user = new User(req.body);
    user.save((err) => {
        if (err) {
            console.log('Failure');
            return next(err);
        }
        else {
            console.log('Success');
            res.json(user);
        }
    });
}

exports.login = (req, res) => {
    if (!req.user) {
        res.sendFile((path.join(__dirname + '/../views/login.html')));
    }
    else {
        return res.redirect('/home');
    }
}

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
}
