const express = require('express');
const { routes } = require('./routes');
const { database: { connection} } = require('./helps');

const app = express();
connection();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(routes);

module.exports = { app };