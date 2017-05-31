var Choice = require('./models/choice.js');
var path = require('path');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
  });

  app.post('/choice', function(req, res) {
    var choice = req.body.choice;
    var userChoice = new Choice();
    userChoice.choice = choice;
    userChoice.save().then(function() {
      res.send('Success');
    }, function(err) {
      console.log('Error: ' + err);
      res.send('Error');
    });
  });
};
