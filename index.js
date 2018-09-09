// Llamado a las instancias que se ocuparán-> Llamado a módulos
/* express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const app = express();
const path = require('path');

app.use(express.static());
app.set("view engine", "jade");

// Indica que los módulos aceptaran valores json y url codificados
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const port = process.env.PORT || 3000;
// Indoca en qué puerto correra la app y la inicia
const server = app.listen(port, () => {
  console.log('app running on port.', server.address().port);
}); // comments */

var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/responsive-web/public/login.html'));
});

app.listen(3000);