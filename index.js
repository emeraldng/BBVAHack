// Llamado a las instancias que se ocuparán-> Llamado a módulos
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

const app = express();
// Indica que los módulos aceptaran valores json y url codificados
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
const port = process.env.PORT || 3000;
// Indoca en qué puerto correra la app y la inicia
const server = app.listen(port, () => {
  console.log('app running on port.', server.address().port);
});
