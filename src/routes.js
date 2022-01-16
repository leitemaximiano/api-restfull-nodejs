const { Router: router } = require('express');
const { person: personControllers } = require('./controllers');

const routes = router();

routes.get('/', function(request, response) {
    return response.status(200).json({msg: 'hello world'});
});

routes.get('/person', personControllers.getAll);
routes.get('/person/:id', personControllers.getOne);
routes.post('/person', personControllers.create);
routes.patch('/person/:id', personControllers.update);
routes.delete('/person/:id', personControllers.remove);

module.exports = { routes };