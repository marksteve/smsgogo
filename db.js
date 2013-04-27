var mongoose = require('mongoose')
  , ObjectId = mongoose.Schema.Types.ObjectId;

var conn = exports.conn = mongoose.connection;

conn.once('open', function callback(){

  exports.Subscriber = mongoose.model('Subscriber', mongoose.Schema({
    email: String
  }));

});

mongoose.connect('mongodb://localhost/emailgogo');
