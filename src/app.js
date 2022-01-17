const express = require('express');
const swaggerUI = require('swagger-ui-express');
const { routes } = require('./routes');
const { database: { connection} } = require('./helps');
const swaggerDocs = require('./swagger.json');


const app = express();
connection();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = { app };