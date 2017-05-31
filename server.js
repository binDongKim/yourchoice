var express      = require('express');
var app          = express();
var port         = process.env.PORT || 8080;
var mongoose     = require('mongoose');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var bodyParser   = require('body-parser'); // POST요청 데이터를 추출하는 미들웨어. request객체에 body 속성을 부여
var configDB     = require('./config/database.js');

mongoose.Promise = global.Promise;
mongoose.connect(configDB.url);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

require('./app/routes.js')(app);

app.listen(port);
