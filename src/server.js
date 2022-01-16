const { app } = require('./app');
const { port } = require('./globalVaribles');


app.listen(port, function() {
    process.stdout.write(`start api http://localhost:${port}\n`);
});
