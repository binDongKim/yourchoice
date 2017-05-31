var Choice = require('./models/choice.js');
var path = require('path');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'base.html'));
  });

  app.get('/case1', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'case1.html'));
  });

  app.get('/case2', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'case2.html'));
  });

  app.get('/case3', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'case3.html'));
  });

  app.get('/case4', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'case4.html'));
  });

  app.get('/case5', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'case5.html'));
  });

  app.get('/case6', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'case6.html'));
  });

  app.post('/choice', function(req, res) {
    var testCase = req.body.testCase;
    var choice   = req.body.choice;

    var userChoice      = new Choice();
    userChoice.testCase = testCase;
    userChoice.choice   = choice;
    userChoice.save().then(function() {
      res.send('Success');
    }, function(err) {
      console.log('Error: ' + err);
      res.send('Error');
    });
  });
};
