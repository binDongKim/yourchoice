var mongoose = require('mongoose');

var choiceSchema = mongoose.Schema({
  testCase: String,
  choice  : String
});

module.exports = mongoose.model('Choice', choiceSchema);
