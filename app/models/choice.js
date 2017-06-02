var mongoose = require('mongoose');

var choiceSchema = mongoose.Schema({
  userCase: String,
  choice  : String
});

module.exports = mongoose.model('Choice', choiceSchema);
