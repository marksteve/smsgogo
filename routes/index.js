var db = require('../db');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.subscribe = function(req, res){
  db.Subscriber.findOneAndUpdate({
    email: req.body.email
  }, {
    email: req.body.email
  }, {
    upsert: true
  }, function(err, user){
    exports.index(req, res);
  });
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
