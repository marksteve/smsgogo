var db = require('../db');

exports.index = function(req, res){
  res.render('index', {message: req.message});
};

exports.subscribe = function(req, res){
  if (req.body.email.length > 0 && /[^@]+@([^.]+\.)+/.test(req.body.email)) {
    db.Subscriber.findOneAndUpdate({
      email: req.body.email
    }, {
      email: req.body.email
    }, {
      upsert: true
    }, function(err, user){
      req.message = 'Thank you for signing up';
      exports.index(req, res);
    });
  } else {
    req.message = 'Please enter a valid email';
    exports.index(req, res);
  }
};

exports.list = function(req, res){
  db.Subscriber.find({}, function(err, users){
    var emails = '';
    users.forEach(function(user) {
      emails += user.email + '<br>';
    });
    res.send(emails);
  });
};
