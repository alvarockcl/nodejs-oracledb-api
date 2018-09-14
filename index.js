var express = require("express");
var query = require('./api/queryroute');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }))

var router = express.Router();
router.get('/', function(req, res) {
    res.json({ message: 'API - Servidor Listo...' });
});

router.get('/query/todos', query.todos);
app.use('/api', router);
app.disable('etag');
app.listen(4000);
console.log("servidor encendido");