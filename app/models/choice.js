var mongoose = require('mongoose');

var choiceSchema = mongoose.Schema({
  choice : String
});

module.exports = mongoose.model('Choice', choiceSchema);
