const { Router: router } = require('express');
const { database: { connection} } = require('./helps');

const routes = router();
connection();
routes.get('/', function(request, response) {
    return response.status(200).json({msg: 'hello world'});
});

module.exports = { routes };