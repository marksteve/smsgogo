var db = require('../db')
  , request = require('superagent')
  , async = require('async');

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

exports.contacts = function(req, res){
  res.render('contacts');
};

exports.message = function(req, res){
  res.render('message');
};

exports.sendMessage = function(req, res){
  var subject = req.body.subject
    , message = req.body.message;

  async.map([
    '09272480523',
    '09468261942',
    '09337204533',
    '09172416140'
  ], function(number, cb){
    request
      .get('https://fireflyapi.com/api/sms')
      .query({
        api: 'Zh5yg5DncRoscm4p2mcz',
        number: number,
        message: subject.trim() + '\n' + message.trim()
      })
      .end(function(res) {
        cb(null, res.body);
      });
  }, function(err, results){
    console.log(results);
    exports.message(req, res);
  });
};
