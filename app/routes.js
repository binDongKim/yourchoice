var Choice = require('./models/choice.js');
var path = require('path');

module.exports = function(app) {


  // Type A: 다른 사람들이 선택한 결과 표시 o, 큰 격차
  app.get('/cupcake', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'type-a.html'));
  });

  // Type B: 다른 사람들이 선택한 결과 표시 o, 적은 격차
  app.get('/donut', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'type-b.html'));
  });

  // Type C: 다른 사람들이 선택한 결과 표시 x
  app.get('/honeycomb', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'type-c.html'));
  });

  app.post('/choice', function(req, res) {
    var userCase = req.body.userCase;
    var choice   = req.body.choice;

    var userChoice      = new Choice();
    userChoice.userCase = userCase;
    userChoice.choice   = choice;
    userChoice.save().then(function() {
      res.send('Success');
    }, function(err) {
      console.log('Error: ' + err);
      res.send('Error');
    });
  });
};
