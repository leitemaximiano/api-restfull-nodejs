const { Router: router } = require('express');
const { person: personControllers } = require('./controllers');

const routes = router();

routes.get('/', function(request, response) {
    return response.status(200).json({msg: 'hello world'});
});

routes.post('/person', personControllers.create);
module.exports = { routes };